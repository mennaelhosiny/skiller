<template>
  <section class="auth current_page">
     <div class="auth-content">
       <div class="container-fluid h-100">
         <div class="row h-100">
           <div class="col-md-5 mb-2 mt-4 h-100 d-flex align-items-center">
              <div class="form-data w-100">
                <div class="social_media_apps_auth"  v-if="false">
                  <p class="text-center mb-2 mt-3">{{ words.register_with }}</p>
                  <div class="text-center mb-2">
                    <a href="#" class="facebook mrl-1">
                      <span><i class="bi bi-facebook"></i></span>
                    </a>
                    <a href="#" class="google">
                      <span><i class="bi bi-google"></i></span>
                    </a>
                  </div>
                  <p>
                    <span></span>
                    <span>{{ words.or }}</span>
                    <span></span>
                  </p>
                </div>
                <form class="p-3" method="post" @submit.prevent="login">
                  <h2>{{ words.login }}</h2>
                  <div class="form-group mb-2 input-icon flex-wrap">
                    <label>{{ words.email }}</label>
                    <input class="form-control" name="email" required>
                    <span><i class="bi bi-envelope"></i></span>
                  </div>
                  <div class="form-group mb-3 input-icon flex-wrap">
                    <label class="d-flex justify-content-between w-100">
                      <span>{{ words.password }}</span>
                      <nuxt-link to="/auth/reset">{{ words.forget_password }}</nuxt-link>
                    </label>
                    <input class="form-control" name="password" type="password" required>
                    <span><i class="bi bi-key"></i></span>
                  </div>

                  <div class="form-group mb-4">
                    <input class="form-control btn btn-primary" type="submit" :value="words.login">
                  </div>
                  <p class="mb-2">
                    <span>{{ words.you_have_not_already_account }}</span>
                    <a href="/auth/register">{{ words.register }}</a>
                  </p>
                </form>
              </div>
           </div>
           <div class="col-md-7 mb-2 mobile-hide auth-bk">
             <div class="info text-center-mobile flex align-items-center justify-content-between">
               <img src="/images/auth/bk.png">
               <div class="text-center">
                 <p class="mb-2 mt-3 white">{{ words.welcome_friend }}</p>
                 <p class="mb-0 white">{{ words.couple_clicks }}</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
  </section>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import {mapActions} from 'vuex';
export default {
  name: "login",
  mixins:[WordsLang],
 
  methods:{
    ...mapActions({
      'login':'auth/login/loginAction'
    }),
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

</style>
