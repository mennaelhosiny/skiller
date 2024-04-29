import CurrentPageDetectPaginate from "../../plugins/CurrentPageDetectPaginate";
import formValidation from "../../validation/formValidation";

export const state = () => ({
  data: [],
  item:{},
  total:0,
  status:true
})

export const getters = {
  getCountriesGetter(state) {
    return state.data
  },
  getTotal(state){
    return  state.total;
  },
  getItem(state){
    return state.item;
  },
  getDataGetter(state) {
    return state.data
  },
}

export const mutations = {
  AddCountryMutation(state,payload) {
    state.data.push(payload);
  },
  InitializeData(state,payload){
    state.data = payload;
  },
  InitializeTotal(state,payload){
    state.total = payload;
  },
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
  async getCountriesAction({ state,commit }) {
     return this.$axios.get('countries').then((e)=>{
      commit('InitializeData',e.data.data)
    }).catch((e)=>{
      console.log(e);
     });
  },




  async getCountriesDashAction({ state,commit },payload = []) {
    commit('loader/updateLoaderMutation',true,{root:true});
    if(
      (Object.keys(payload).length > 0 && payload.hasOwnProperty('empty') ) || (payload instanceof FormData && payload.has('empty'))
    ){
      commit('EmptyData');
      commit('ChangeStatus',true);
    }

    var page = CurrentPageDetectPaginate(payload);
    if(state.status) {
      return this.$axios.post('dashboard/countries' + page, payload).then((e) => {
        console.log(e.data.data.data);
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
    return this.$axios.post('dashboard/countries/save', payload).then((e) => {
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
