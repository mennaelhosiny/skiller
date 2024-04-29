<template>
  <section class="auth current_page">
    <div class="auth-content">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-md-5 mb-2 mt-3 d-flex align-items-center">
            <div class="form-data w-100">
              <form class="p-3" method="post" @submit.prevent="reset_password">
                <h2 >{{ words.new_password }}</h2>
                <input type="hidden" name="serial_number" :value="$route.query.serial_number">
                <div class="form-group mb-3 input-icon flex-wrap">
                  <label>{{ words.password }}</label>
                  <span><i class="bi bi-key"></i></span>
                  <input class="form-control" name="password" type="password" required>
                  <p class="alert alert-danger w-100 mt-2"></p>
                </div>
                <div class="form-group mb-3 input-icon flex-wrap">
                  <label>{{ words.password_confirmation }}</label>
                  <input class="form-control" name="password_confirmation" type="password" required>
                  <span><i class="bi bi-key"></i></span>
                </div>
                <div class="form-group mb-4">
                  <input class="form-control btn btn-primary" type="submit" :value="words.save">
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-7 mb-2 mobile-hide auth-bk">
            <div class="info text-center-mobile flex align-items-center justify-content-between">
              <img src="/images/auth/bk.png">
              <div class="text-center">
                <p class="mb-2 mt-3 white">{{ words.reset_password }}</p>
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
import {mapActions} from "vuex";

export default {
  name: "new_password",
  mixins:[WordsLang],
  data(){
    return {
      activation_code:'',
    }
  },
  mounted() {
    this.activation_code = document.URL.split('serial_number=')[1];
  },
  async asyncData({route,store,redirect,$axios}){
    console.log(route.query)
    if(Object.keys(route.query).length > 0){
      try{
        var output = await  $axios.post('user-by-activation-code',{serial_number:route.query.serial_number,id:route.query.id})
      }catch (e){
        return redirect('/auth/login');
      }
    }else{
      return redirect('/auth/login');
    }
  },
  methods:{
    ...mapActions({
      'reset_password':'auth/reset/reset_password'
    })
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.alert-danger{
  display: none;
}
</style>
