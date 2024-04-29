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
  },
  getStatus(state){
    return state.status;
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
    if(payload.length > 0 ) {
      state.data = [...state.data, ...payload]
    }else if(payload != null && Object.keys(payload).length > 0){
      state.data.unshift(payload)
    }
  },
  update_index_data:function (state,payload){
    let id = state.data.findIndex((item)=>{
      return item.id ==  payload.id;
    });
    if(id >= 0){
      if(state.data[id]) {
        this._vm.$set(state.data,id,payload);
      }
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
      payload.append('admin',true);
      return this.$axios.post('titledesc' + page, payload).then((e) => {
        commit('UpdateData', e.data.data);
        commit('SetTotal',e.data.total);
        console.log(e.data.data);
        console.log(e.data.data.length);
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
    return this.$axios.post('titledesc/save', payload).then((e) => {
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
