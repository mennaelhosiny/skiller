<template>
  <div>
      <navbar-component></navbar-component>
      <nuxt />
      <span class="up"><i class="bi bi-arrow-up"></i></span>
      <loader v-if="loader_status" :color="'#0a58ca'" size="60px"></loader>
      <footer-component></footer-component>


  </div>
</template>

<script>

import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import text_editor from "../mixins/text_editor";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: "default",
  mixins:[text_editor],
  computed:{
    ...mapGetters({
      'loader_status':'loader/getLoaderGetter',
      'auth_check_getter':'auth/login/get_auth_user_validation'
    })
  },
  watch: {
    $route() {
      this.loginSerial();
    }
  },
  methods:{
    ...mapActions({
      'validate_user':'auth/login/validateAuthAction',
      'loginBySerial':'auth/login/loginBySerial'

    }),
    async loginSerial(){

      if(document.cookie.indexOf('skillar_name') == -1){
        document.cookie = 'skillar_name='+window.location.origin+";domain=.skillar.com; path=/";
      }
      if(!(this.$auth.loggedIn)){
        let cookies =document.cookie.split(';')
        for(let cookie of cookies){
          if(cookie.indexOf('loginExternalSite') >= 0){
            let data = JSON.parse(cookie.split('=')[1]);
            if(data.website === 'skillar' && data.user.hasOwnProperty('serial_number')){
              await this.loginBySerial(data.user.serial_number)
            }
            break;
          }
        }


      }
    }
  },
  mounted() {
    /*if(this.auth_check_getter == null){
       this.validate_user();
    }*/
    if(localStorage.user_view_obj == undefined){
       var obj = {
          auth_status:this.$auth.loggedIn == undefined ? false:true,
          count:0
       };
       localStorage.setItem('user_view_obj',JSON.stringify(obj));
    }
    this.loginSerial()

  },
  components: {NavbarComponent,FooterComponent}
}
</script>

