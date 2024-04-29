export const state = () => ({
  data: []
})

export const getters = {
  getData(state) {
    return state.data
  }
}

export const mutations = {
  InitializeData(state,payload){
    state.data = payload;
  }
}

export const actions = {
  async getTags({state , commit},payload = {}){
    var data = new FormData();
    data.append('table',payload['table']);
    data.append('title',payload['search']);
    return this.$axios.post('titledesc',data).then((e) => {
      var result = e.data.data.map(function (e){
        return {
          key:e.id,
          value:e.title
        }
      })
      commit('InitializeData', result)
    })

  }
}
