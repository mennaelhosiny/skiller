export const state = () => ({
  data: []
})

export const getters = {
  getCitiesGetter(state) {
    return state.data
  }
}

export const mutations = {
  InitializeData(state,payload){
    state.data = payload;
  }
}

export const actions = {
  async getCitiesInsideCountryAction({state , commit},payload = ''){
    if(event) {
      if (event.target.name != 'country_id') {
        return false;
      }
      var country_id = event.target.value;var country_id = event.target.value;
    }else{
      var country_id = payload;
    }

    commit('loader/updateLoaderMutation',true,{root:true});

    return this.$axios.get('cities?country_id=' + country_id).then((e) => {
      commit('InitializeData', e.data.data)
    }).finally(() => {
      commit('loader/updateLoaderMutation', false, {root: true});
    });

  }
}
