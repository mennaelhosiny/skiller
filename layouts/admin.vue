<template>
  <div class="admin">
    <div class="row">
      <div class="col-lg-2 col-md-4">
          <nav :key="current_page">
            <nuxt-link tag="img" src="/images/logo.png" class="brand cursor-pointer" to="/"></nuxt-link>
            <ul v-if="words['links']">
               <li v-for="(i,index) in words.links">
                 <span class="mrl-half"><i :class="i['icon']"></i></span>
                 <nuxt-link :to="'/dashboard'+i['path']">{{ i['name'] }}</nuxt-link>
               </li>

             </ul>
          </nav>
      </div>
      <div class="col-lg-10 col-md-8">
        <nuxt />
        <loader v-if="loader_status" :color="'#0a58ca'" size="60px"></loader>
      </div>
    </div>


  </div>
</template>

<script>

import WordsLang from "../mixins/WordsLang";
import {mapGetters} from "vuex";
export default {
  name: "admin",
  data(){
     return {
       file_name:'admin_layout',
       current_page:'',
     }
  },
  mixins:[WordsLang],
  computed:{
    ...mapGetters({
      'loader_status':'loader/getLoaderGetter',
    })
  },
  mounted() {
    this.current_page = this.$route.path.split('/')[this.$route.path.split('/').length - 1];
    for(let li of document.querySelectorAll('ul li')){
       if(li.children[1].href.indexOf(this.current_page) >= 0){
           li.className = 'active';
           break;
       }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
.admin {
  overflow: hidden;
  nav {
    background-color: $main_color_more_white_bk;
    padding-top: 30px;
    height: 100%;
    img.brand{
      height: 75px;
      display: block;
      margin:auto;
      margin-bottom: 30px;
      max-width: 100%;
    }
    ul{
      li{
        padding: 10px;
        border-bottom: 1px solid #dddddd;
        transition: 0.5s all;
        span,a{
          font-size: $normal !important;
        }
        span{
          color:$main_color;
        }
        a{
          display: inline-block;
          width: calc(100% - 30px);
          color:$black;
        }
        &.active{
          background-color: $main_color_white_bk;
          padding-right: 30px;
          padding-left: 30px;
        }
        &:hover{
          @extend .active
        }
      }
    }
  }
}
</style>

