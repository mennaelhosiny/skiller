import formValidation from '/validation/formValidation';
export const state = () => ({
  user_info: {},
  auth_user_validation:null,
})



export const getters = {
  get_auth_user_validation(state) {
    return state.auth_user_validation
  },
}

export const mutations = {
  InitializeData(state,payload){
    state.user_info = payload;
  },
  UpdateAuthUserValidation(state,payload){
     state.auth_user_validation = payload
  },
}


export const actions = {
  async loginAction({ state,commit }) {
    let router = this.$router;
    var target = event.target;
    // Clear the redirect path
    this.$auth.$storage.setUniversal('redirect', null)
    // commit('loader/updateLoaderMutation',true,{root:true});
    try {
      await this.$auth.loginWith('local', {
        data: new FormData(target)
      }).then((dataresponse)=>{
        if(dataresponse.data.hasOwnProperty('errors')){
          return Toast.fire({
            icon:'error',
            title:dataresponse.data.errors
          });
        }
        if(this.state.auth.user){
          let data = {
            user:this.state.auth.user,
            website:'skillar'
          }
          document.cookie = "loginExternalSite="+JSON.stringify(data)+";domain=.skillar.com; path=/"
          window.location = '/';
        }
      }).catch((e)=>{
        Toast.fire({
          icon:'error',
          title:'error in auth process'
        });
        router.push('/auth/login');
        return false;
      })

      //window.location = '/';
      //this.$auth.setUser(response.data.user)
    }catch {
      Toast.fire({
        icon:'error',
        title:'error in auth process'
      });
      await router.push('/auth/login');
      return false;
    }
    /*return this.$axios.post('login',new FormData(target)).then((e)=>{
      console.log(e.data);
      formValidation(e.data,target,'/',true);
      if(e.data.status == 200){
        window.location = '/';
      }
      if(e.data.status == 200){
        commit('InitializeData',e.data.data);
        localStorage.setItem('user_info',JSON.stringify(e.data.data));
        localStorage.setItem('token',e.data.data.token);
        sessionStorage.setItem('authenticated',true);
        document.cookie = "token="+e.data.data.token+"; expires=Thu, 01 Jan 3970 00:00:00 UTC; path=/;";
        document.cookie = "user_info="+JSON.stringify(e.data.data)+"; expires=Thu, 01 Jan 3970 00:00:00 UTC; path=/;";
      }
    }).finally(() => {
      commit('loader/updateLoaderMutation',false,{root:true});
    });*/
  },

  async deleteUserData(){
    console.log('delete user data');
    localStorage.removeItem('user_info');
    localStorage.removeItem('token');
    sessionStorage.clear();
    document.cookie = "token=; expires=Thu, 01 Jan 1990 00:00:00 UTC; path=/;";
    document.cookie = "user_info=; expires=Thu, 01 Jan 1990 00:00:00 UTC; path=/;";
    window.location = '/auth/login';
  },

  async loginBySerial({state,commit,dispatch},serial_number){
    let data = new FormData();
    data.append('serial_number',serial_number);
    await this.$auth.loginWith('local', {
      data: data
    }).then((e)=>{
      if(e.data.status === 200 || e.data.hasOwnProperty('id')) {
        window.location = document.URL;
      }
    })
  },


  async validateAuthAction({state,commit,dispatch}){
    var data = new FormData();

    if(!(localStorage.hasOwnProperty('token'))){
      return false;
    }
    if(localStorage.hasOwnProperty('token')){
      data.append('token',localStorage.token);
    }
    return this.$axios.post('validate-user',data,{

    }).then((e)=>{
      if(e.status == 200){
        sessionStorage.setItem('authenticated',true);
        commit('UpdateAuthUserValidation',true);
      }
    }).catch((e)=>{
      dispatch('deleteUserData');
      commit('UpdateAuthUserValidation',false);

    })
  },


  async logoutAction({state,commit,dispatch}){
    //this.$auth.logout();
    document.cookie = "loginExternalSite=; domain=.skillar.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    return this.$axios.post('logout').then((e)=>{
      document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
      localStorage.clear();
      window.location = '/auth/login';
    })
  }

}
