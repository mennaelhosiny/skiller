import CurrentPageDetectPaginate from "../../plugins/CurrentPageDetectPaginate";
import formValidation from "../../validation/formValidation";
import Vue from "vue";

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
    if(payload.length > 0) {
      state.data = [...state.data, ...payload]
    }
  },
  update_index_data:function (state,payload){
    let id = state.data.findIndex((item)=>{
      return item.id ==  payload.id;
    });
    if(id >= 0){
      console.log(id);
      console.log(state.data);
      if(state.data[id]) {
        console.log(this._vm);
        //this._vm.$set(state.data,id,payload);
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
      console.log('empty data.......................')
      commit('EmptyData');
      commit('ChangeStatus',true);
    }

    var page = CurrentPageDetectPaginate(payload);
    if(state.status) {
      return this.$axios.post('dashboard/users' + page, payload).then((e) => {
        commit('UpdateData', e.data.data);
        commit('SetTotal',e.data.meta.total);
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
  save_user({state,commit},payload = [],target){
    commit('loader/updateLoaderMutation',true,{root:true});
      return this.$axios.post('users/save', payload).then((e) => {
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
  }
}
