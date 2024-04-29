export const state = () => ({
  data: false
})

export const getters = {
  getLoaderGetter(state) {
    return state.data
  }
}

export const mutations = {
  updateLoaderMutation(state,payload){
    state.data = payload;
  }
}
