import CurrentPageDetectPaginate from "../../plugins/CurrentPageDetectPaginate";

export const state = () => ({
  data: [],
  item:{},
  keywords:'',
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
  getItemJob(state){
    return state.item;
  },
  getKeywords(state){
    return state.keywords;
  }
}

export const mutations = {
  SetTotal(state,payload){
    state.total = payload;
  },
  SetItemJob(state,payload){
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
  SetKeywords(state,payload){
     state.keywords = payload;
  }
}

export const actions = {
  async allJobsAction({ state,commit},payload = []) {
    commit('loader/updateLoaderMutation',true,{root:true});
    if(Object.keys(payload).length > 0 && payload.hasOwnProperty('empty')){
      commit('EmptyData');
      commit('ChangeStatus',true);
    }

    var page = CurrentPageDetectPaginate(payload);

    if(state.status) {
      return this.$axios.post('jobs/names' + page, payload).then((e) => {
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
  async SpecificJob({commit},payload){
    commit('loader/updateLoaderMutation', true, {root: true});
    return this.$axios.get('jobs/' + payload).then((e) => {
       let output = '';
       for(let item in e.data.data){
         if(Array.isArray(e.data.data[item])){
            for(let item_el of e.data.data[item]){
              if(typeof item_el == "string") {
                output += item_el.split(' , ');
              }else{
                output += Object.values(item_el).join(' , ');
              }
            }
         }else if(item != 'id' && typeof e.data.data[item] == "string" && e.data.data[item] != ''){
           output += e.data.data[item].split(' , ');
         }
       }
        commit('SetItemJob',e.data.data)
        commit('SetKeywords',output);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  },
  async getJobsByName({commit},payload){
    return this.$axios.post('jobs/names',payload).then((e) => {
      commit('InitializeData', e.data.data);
      commit('SetTotal', e.data.meta.total);
      commit('ChangeStatus',true);
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });
  }
}
