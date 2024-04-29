import formValidation from '/validation/formValidation';
export const state = () => ({

})


export const actions = {
  async check_email_exists({ state,commit }) {
    let data = new FormData(event.target)
    return this.$axios.post('/check-email',data).then((e)=>{
      Toast.fire({
        'icon':e.data.status === 200 ? 'success':'error',
        'title':e.data.message
      })
    })
  },

  async reset_password({commit},payload){
    var target = event.target;
    var data = new FormData(target);
    var router = this.$router;
    commit('loader/updateLoaderMutation',true,{root:true});
    return this.$axios.post('newpass',data).then((e)=>{

      formValidation(e.data,target,'/auth/login','',router)
    }).finally(() => {
      commit('loader/updateLoaderMutation',false,{root:true});
    }).catch(function (e){
      console.log(e);
    });
  }

}
