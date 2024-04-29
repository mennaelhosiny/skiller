import CurrentPageDetectPaginate from "../../plugins/CurrentPageDetectPaginate";
import formValidation from "../../validation/formValidation";

export const state = () => ({
  data: [],
  item:{},
  total:0,
  status:true
})

export const getters = {
  getData(state) {
    return state.data
  },
  getTotal(state){
    return state.total;
  },
  getItem(state){
    return state.item;
  }
}

export const mutations = {
  SetTotal(state,payload){
    state.total = payload;
  },
  SetItem(state,payload){
    state.item = payload;
  },
  ChangeStatus(state,payload){
    state.status = payload;
  },
  EmptyData(state){
    state.data = [];
  },
  InitializeData(state,payload){
    state.data = payload;
  },
  UpdateData(state,payload){
    console.log(payload);
    if(payload.length > 0 ) {
      state.data = [...state.data, ...payload]
    }else if(payload != null && Object.keys(payload).length > 0){
      state.data.unshift(payload)
      console.log(state.data);
    }
  },
  update_index_data:function (state,payload){
    let id = state.data.findIndex((item)=>{
      return item.id ==  payload.id;
    });
    if(id >= 0){
      console.log(id);
      if(state.data[id]) {
        console.log(this._vm);
        this._vm.$set(state.data,id,payload);
      }
      console.log(state.data);

    }
  }
}

export const actions = {
  async allDataAction({ state,commit},payload = []) {
    commit('loader/updateLoaderMutation',true,{root:true});
    if(
      (Object.keys(payload).length > 0 && payload.hasOwnProperty('empty') ) || (payload instanceof FormData && payload.has('empty'))
    ){
      commit('EmptyData');
      commit('ChangeStatus',true);
    }

    var page = CurrentPageDetectPaginate(payload);
    if(state.status) {
      return this.$axios.post('dashboard/skills' + page, payload).then((e) => {
        commit('UpdateData', e.data.data.data);
        commit('SetTotal',e.data.data.total);
        if(e.data.data.length == 0){
          commit('ChangeStatus',false);
        }
      }).finally(() => {
        commit('loader/updateLoaderMutation', false, {root: true});
      });
    }else{
      commit('loader/updateLoaderMutation', false, {root: true});
    }
  },
  async save_data({state,commit},payload = [],target){
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.post('dashboard/skills/save', payload).then((e) => {
      if( payload instanceof FormData && payload.has('id')
      ){
        commit('update_index_data',e.data.data);
      }else {
        commit('UpdateData', e.data.data);
      }
      formValidation(e.data,target);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },
}
