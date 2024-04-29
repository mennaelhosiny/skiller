import CurrentPageDetectPaginate from "../../plugins/CurrentPageDetectPaginate";
import formValidation from "../../validation/formValidation";


export const state = () => ({
  data: [],
  parents:[],
  item:{},
  total:0,
  status:true
})

export const getters = {
  getData(state) {
    return state.data
  },
  getParents(state) {
    return state.parents
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
  SetParents(state,payload){
    state.parents = payload;
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
      return this.$axios.post('jobs/dash' + page, payload).then((e) => {
        commit('UpdateData', e.data.data.data);
        commit('SetTotal',e.data.data.total);
        if(e.data.data.data.length == 0){
          commit('ChangeStatus',false);
        }
      }).catch((e)=>{
        console.log(e);
      }).finally(() => {
        commit('loader/updateLoaderMutation', false, {root: true});
      });
    }else{
      commit('loader/updateLoaderMutation', false, {root: true});
    }
  },
  async getInfoJob({state,commit},payload){
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.get('jobs/' + payload+'?admin=true').then((e) => {
      commit('SetItem', e.data.data);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },

  async parentsAction({state,commit}){
    return this.$axios.post('jobs/parents').then((e) => {
      commit('SetParents', e.data.data);
    })
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

  async save_job_information({state,commit}){
    var target = event.target;
    for(let input of $(target).find('.form-control')){
       if(input.value.length == 0){
         Toast.fire({
           icon:'error',
           title:localStorage.lang == 'ar' ? 'من فضلك قم بأدخال جميع الحقول قبل عملية الحفظ':'please complete all required inputs',
         });
         return false;
       }
    }
    commit('loader/updateLoaderMutation',true,{root:true});
    var payload = new FormData(target);
    if(payload.has('id')){
      var url = '/jobs/'+payload.get('id');
      payload.append('_method','put');
    }else{
      var url = '/jobs';
    }
    return this.$axios.post(url, payload).then((e) => {
      console.log(url);
      console.log(e.data);
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
