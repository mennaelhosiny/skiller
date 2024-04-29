import formValidation from '/validation/formValidation';

export const actions = {
  async registerAction({ state,commit }) {
    let router = this.$router;
    var target = event.target;
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.post('register',new FormData(target)).then((e)=>{
      formValidation(e.data,target,'/auth/login',true,router);
    }).finally(() => {
      commit('loader/updateLoaderMutation',false,{root:true});
    });
  },
  
}
