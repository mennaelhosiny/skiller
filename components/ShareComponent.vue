<template>
  <!-- share Modal -->
  <div class="modal share fade" id="shareModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" >
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">{{ words.share_link }}</h1>
          <button type="button" class="btn-close"
                  style="margin: inherit"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="p-2 link">{{ url }}</p>
          <div class="icons">
             <a class="d-inline-flex justify-content-between align-items-center mrl-1"
                target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u='+url">
               <i class="bi bi-facebook"></i>
             </a>
            <a class="d-inline-flex justify-content-between align-items-center mrl-1"
               target="_blank" :href="'https://www.linkedin.com/shareArticle?mini=true&url='+url">
               <i class="bi bi-linkedin"></i>
             </a>
            <a class="d-inline-flex justify-content-between align-items-center mrl-1" target="_blank"
               :href="'http://twitter.com/share?text='+post_text+'&url='+url">
               <i class="bi bi-twitter"></i>
             </a>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordsLang from "../mixins/WordsLang";
export default {
  name: "ShareComponent",
  mixins:[WordsLang],
  data(){
    return {
      file_name:'modals/share_box',
      url:'',
      post_text:'',
    }
  },
  mounted() {
    this.url = document.URL;
    this.post_text = document.querySelector('head title').innerHTML;
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.share{
  .link{
    background-color: $main_color_white_bk;
    font-weight: bold;
    border-radius: 4px;
  }
  .icons{
     a{
       width: 30px;
       height: 30px;
       display: inline-block;
       margin-top: 4px;
        i{
          font-size:$semi_big;
        }
     }
     a:first-of-type{
       color:#4267B2;
     }
     a:nth-of-type(2){
      /* background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
       -webkit-background-clip: text;
       background-clip: text;
       -webkit-text-fill-color: transparent;*/
       color:#0A66C2;
     }
     a:nth-of-type(3){
       color: #1D9BF0;
     }
  }
}
</style>
