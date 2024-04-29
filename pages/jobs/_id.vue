<template>
  <div class="job_info current_page">
    <div class="header_shape pt-4 pb-4 position-relative">
      <div class="header_shape_2"></div>
      <div class="container">
        <h2 class="text-center fw-bold mb-4">
          {{ getJobItemGetter['name'] }}
        </h2>
        <p class="text-center gray">
          {{ getJobItemGetter['description'] }}
        </p>
      </div>
    </div>
    <div class="info mt-2">
        <div class="container">

          <div class="row" v-if="$auth.loggedIn == true || count_explore < 4">
            <div class="col-lg-9 col-md-6 col-12 mb-2 mt-2">
               <div class="d-flex align-items-center justify-content-between buttons">
                  <button class="btn-bk-primary d-inline-flex align-items-center" status="open" @click="toggle_all_sections">
                    <span class="p-relative mrl-1 ">{{ words.close_all_sections }}</span>
                    <span><i class="position-relative top-1 bi-arrow-down-up"></i></span>
                  </button>
                  <div>
                    <button
                            v-for="(btn,index) in words.buttons" :key="index"
                            :class="'btn-bk-primary d-inline-flex align-items-center mb-2 '+(index > 0 ? 'mrl-reverse-15':'')  "
                            :copy_target="btn['icon'] == 'bi bi-clipboard-check' ? true:false"
                            :data-bs-toggle="btn['icon'] == 'bi bi-share' ?'modal':''"
                            :data-bs-target="btn['icon'] == 'bi bi-share' ? '#shareModal':''"

                    >
                      <span class="p-relative mrl-1 " >{{ btn['name'] }}</span>
                      <span><i :class="'position-relative top-1'+btn.icon"></i></span>
                    </button>
                  </div>
               </div>
               <div class="data-table" v-if="words.job_features">
                  <table class="table table-bordered table-hover" v-if="false">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody v-for="(i,index) in Object.keys(words.job_features)" :key="index">
                       <tr>
                         <td>{{ words.job_features[i] }}</td>
                         <td>{{ getJobItemGetter[i] }}</td>
                       </tr>
                    </tbody>

                  </table>
               </div>

              <div class="job-data mt-3">
                 <div class="main-data mb-3" :id="i['link']" v-for="(i,index) in words.task_bar" :key="index">
                    <div class="main-data-header d-flex align-items-center justify-content-between mb-3">
                       <p class="mb-0 fw-bold" :link="i['link']">{{ i['name'] }}</p>
                       <div class="d-flex align-items-center">
                         <p class="mb-0 border-side cursor-pointer" @click="copy">
                           <span class="gray"><i class="bi bi-clipboard-check"></i></span>
                           <span class="gray">{{ words.copy }}</span>
                         </p>
                         <p class="mb-0 mrl-reverse-15 cursor-pointer" @click="show_more_less">
                           <span class="gray"><i class="bi bi-chevron-up position-relative top-3"></i></span>
                           <span class="gray">{{ words.show_less }}</span>
                         </p>
                       </div>
                    </div>
                    <div class="main-data-body">
                      <div class="mb-0" v-for="(item,index) in getJobItemGetter[i['link']]" :key="index">
                         <p class="mb-0 fw-bold">{{ item['title'] }}</p>
                         <p class="normal gray">{{ item['description'] }}</p>
                         <p class="normal gray"
                            v-if="item.hasOwnProperty('skill')">{{ item['skill']['title'] }}</p>
                        <p class="normal gray"
                           v-if="item.hasOwnProperty('skill')">{{ item['skill']['description'] }}</p>

                        <div class="skill d-flex justify-content-between" v-if="item.hasOwnProperty('skill') && false">
                          <div>
                            <span class="gray fw-bold mrl-half">{{ words.importance }} : </span>
                            <span class="gray">{{ item.importance }}</span>
                          </div>
                          <div>
                            <span class="gray fw-bold mrl-half">{{ words.mastery }} : </span>
                            <span class="gray">{{ item.importance }}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                 </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 mb-2">
               <div class="side-bar h-100">
                  <ul>
                    <li @click="go_to_section" v-for="(i,index) in words.task_bar"  :class="'mb-3 '+(index == 0 ? 'active':'')" :key="index">
                      <nuxt-link :to="'#'+i['link']" >{{ i['name'] }}</nuxt-link>
                    </li>
                  </ul>
                  <button v-if="false" class="mt-5 btn btn-outline-primary w-100 hover-white" data-bs-toggle="modal"
                          data-bs-target="#feedback">
                    <span class="blue mrl-half position-relative top-1"><i class="bi bi-card-text"></i></span>
                    <span class="blue">{{ words['send_feedback'] }}</span>
                  </button>

               </div>
            </div>
          </div>
          <p v-else class="alert alert-warning">{{ words['should_login_to_view'] }}</p>
        </div>
    </div>
    <share-component></share-component>
    <send_feedback :title="words['send_feedback']"></send_feedback>

  </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import CopyContent from "../../mixins/CopyContent";
import GeneratePDF from "../../mixins/GeneratePDF";
import ShareComponent from "../../components/ShareComponent";
import {mapGetters,mapActions} from 'vuex';
import GuestUser from "../../mixins/GuestUser";
import Send_feedback from "../../components/Modals/send_feedback";
export default {
  name: '_id',
  components: {Send_feedback, ShareComponent},
  mixins:[WordsLang,CopyContent,GeneratePDF,GuestUser],
  asyncData({store,route}){
     if(route.params){
       return store.dispatch('jobs/SpecificJob',route.params.id);
     }

  },
  async validate({ params}) {
    return !(isNaN(params.id));
  },
  data(){
    return {
      data: [],
      skills:['php','mysql','laravel'],
      keywords_data:'',
    }
  },
  computed:{
    ...mapGetters({
       'getJobItemGetter':'jobs/getItemJob',
       'getKeywordsGetter':'jobs/getKeywords',
    }),
  },
  async mounted() {
    if(this.count_explore > 3){
      this.guest_action()
      /*Toast.fire({
        icon:'error',
        title:'من فضلك سجل دخول لكي يمكنك تصفح محتوي جميع الوظائف',
      //  title:this.words.should_login_to_view
      });
      return this.$router.push('/');*/
    }
    //this.keywords_data = 'abv';

    var com = this;
    setTimeout(()=>{
      /*document.querySelector('.buttons button[copy_target=true]').addEventListener('click', function () {
        var copyBoxElement = document.querySelector('body');
        com.copy_content(copyBoxElement);
      })*/

      document.querySelector('.buttons button:nth-of-type(2)').addEventListener('click', function () {
        $('.buttons > button').attr('status','close');
        $('.buttons > button').click()
        console.log('print proces----------->');
        setTimeout(()=>{
          window.print();
        },1000);
      })

     /* document.querySelector('.buttons button:nth-of-type(4)').addEventListener('click', function () {
        com.generatePDF(document.querySelector('.job-data'),'job_description');
      })*/


      /*const doc = new jsPDF();

      doc.text("Hello world!", 10, 10);
      doc.save("job_definition.pdf");*/
    },2500);
  },
  head() {
    return {
      title: this.getJobItemGetter['name'],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getJobItemGetter['description']
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.getKeywordsGetter
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      ],
    }
  },

  methods:{
    show_more_less(){
      var com = this;
      var parent = $(event.target).parent();
      if(event.target.tagName.toLocaleLowerCase() == 'i'){
         parent = $(event.target).parent().parent()
      }
      if($(event.target).parent().find('i').hasClass('bi bi-chevron-up')){
        parent.find('i').removeClass('bi bi-chevron-up').addClass('bi bi-chevron-down')
        parent.find('span:last-of-type').html(com.words['show_more']);
      }else{
        parent.parent().find('i').removeClass('bi bi-chevron-down').addClass('bi bi-chevron-up');
        parent.parent().find('span:last-of-type').html(com.words['show_less']);
      }
      $(event.target).parentsUntil('.job-data').last().find('.main-data-body').slideToggle();
    },
    toggle_all_sections:function (){
      var ev = event.target;
      var com = this;
      if(event.target.tagName.toLocaleLowerCase() == 'span'){
        ev = event.target.parentElement;
      }else if(event.target.tagName.toLocaleLowerCase() == 'i'){
        ev = event.target.parentElement.parentElement;
      }
      if(ev.getAttribute('status') == 'open') {
        $('.main-data .main-data-body').slideUp();
        ev.setAttribute('status','close');
        $('.main-data .main-data-header div p:last-of-type span:last-of-type').html(com.words['show_more']);
        $('.main-data .main-data-header div p:last-of-type span:first-of-type i').removeClass('bi bi-chevron-up').addClass('bi bi-chevron-down');
        $(ev).find('span:first-of-type').html(com.words['open_all_sections']);
      }else{
        $('.main-data .main-data-body').slideDown();
        ev.setAttribute('status','open');
        $('.main-data .main-data-header div p:last-of-type span:last-of-type').html(com.words['show_less']);
        $('.main-data .main-data-header div p:last-of-type span:first-of-type i').removeClass('bi bi-chevron-down').addClass('bi bi-chevron-up');
        $(ev).find('span:first-of-type').html(com.words['close_all_sections']);

      }
    },
    copy() {
      // Get the paragraph element
      var copyBoxElement = $(event.target).parentsUntil('.job-data').last().find('.main-data-body')[0];

      this.copy_content(copyBoxElement);
    },
    go_to_section(){
      var com = this;
      if(event.target.tagName.toLocaleLowerCase() == 'a'){
       var a_link = $(event.target).attr('href').split('#');
      }else{
        var a_link = $(event.target).find('a').attr('href').split('#');
      }
      console.log(a_link);
      console.log($('#'+a_link[1]+' .main-data-body'));

      $('#'+a_link[1]+' .main-data-body').slideDown();
      $('#'+a_link[1]).find('.main-data-header div p:last-of-type i').removeClass('bi bi-chevron-down').addClass('bi bi-chevron-up');
      $('#'+a_link[1]).find('.main-data-header div p:last-of-type span:last-of-type').html(com.words['show_less']);
    },
    generate_keywords(){
      let output = '';
      for(let i of Object.keys(this.words.job_features)){
        output+= this.words.job_features[i].split(' ').join(',');
        output+= this.getJobItemGetter[i].split(' ').join(',');
      }
      return output;
    }
  },
  comments:{ShareComponent},
}
</script>

<style lang="scss">
@import "~style/variables";

.info{
  .side-bar{
    background-color: $gray_white;
    padding: 15px;
    border-radius: 6px;
    li{
      transition: 0.5s all;
      a{
        color:$gray;
        width: 100%;
        display: block;
      }
      &.active{
        background-color: white;
        border-bottom: 2px solid $main_color;
        padding: 5px;
        border-radius: 4px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        a{
          color:$black;
        }
      }
      &:hover{
        @extend .active;
      }
    }
  }
}

.buttons{
  button{
    border:1px solid $main_color;
    span{
      color:$main_color;
    }
  }
}

.job-data{
  .main-data{
    .main-data-header{
      background-color: $main_color_white_bk;
      padding: 8px;
      border-radius: 4px;
    }
  }
}

@media (max-width: 767px) {
  .info{
    .row{
      >div:first-of-type{
        order:2;
      }
    }
  }
}
</style>
