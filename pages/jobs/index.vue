<template>
  <div class="jobs_descriptions current_page">
     <div class="header_shape">
      <div class="container">
       <h2 class="text-center mb-4">
          <span>{{ words.main_title }}</span>
          <span>{{ getTotal }}</span>
          <span style="border-bottom: 1px solid gray">{{ words.job_description }}</span>
       </h2>
       <form name="filters" class="filters-input-form infinite_scroll_form" @submit.prevent="SearchNames">
          <div class="row">
             <div class="col-lg-3 col-md-6 position-relative mobile-margin-bottom">
               <div class="d-flex align-items-center justify-content-between border-side">
                  <div class="position-relative input-related-icon"> <!-- input-related-icon -->
                    <input class="form-control search_drop_down_input" search_at="search-drop-down"
                           @keyup="SearchNames"
                           name="name" :placeholder="words.job_title">
                    <span><i class="bi bi-briefcase"></i></span>
                  </div>
                  <span v-if="false" class="dl"><i class="bi bi-chevron-down"></i></span>
               </div>
               <ul class="search-drop-down" v-if="false">
                 <li v-for="i in 5">HTML</li>
               </ul>
             </div>
             <div class="col position-relative">
               <div class="input-related-icon">
                 <span><i class="bi bi-search"></i></span>
                 <input class="form-control" @keyup="SearchNames" name="desc" :placeholder="words.job_description">
               </div>
             </div>
             <div class="col-auto">
                <input type="submit" class="btn btn-primary" :value="words.search">
             </div>
          </div>
       </form>
       <p class="mb-0 blue cursor-pointer" data-bs-toggle="modal" data-bs-target="#job_info_filters_box">{{ words['more_filters'] }}</p>

      </div>
     </div>
     <div class="jobs_data mt-4">
       <div class="container">
         <div class="row infinite_scroll" action_path="jobs/allJobsAction">
            <div class="col-lg-6 col-12 mb-2" v-for="(i,index) in jobs_data" :key="index">
               <a target="_blank" :href="'/jobs/'+i['id']">
                 <span>{{ index + 1 }}</span>
                 <span class="mrl-reverse-15">{{ i['name'] }}</span>
               </a>
            </div>
         </div>
       </div>
     </div>
    <job_info_filters_box></job_info_filters_box>

  </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import InfiniteScroll from "../../mixins/InfiniteScroll";
import {mapGetters,mapActions} from 'vuex';
import Job_info_filters_box from "../../components/Modals/job_info_filters_box";
import filters_jobs_search from "../../mixins/filters_jobs_search";

export default {
  name: 'jobs',
  components: {Job_info_filters_box},
  mixins:[WordsLang,InfiniteScroll,filters_jobs_search],
  data(){
    return {
      data: [],
      skills:['php','mysql','laravel'],
      lang:'',
      meta:{
        description:'You will find job descriptions for all jobs around the world here in jd.skillar.com. You will know everything related to jobs, including tasks, interests, requirements, certificates, etc., all in one place. | الوصف الوظيفي لجميع الوظائف حول العالم ستجدها هنا في سكلير ستعرف كل ما يتعلق بالوظائف  من مهام و اهتمامات و متطلبات و شهادات و خلافه هذا كله في مكان واحد ',
        keywords:'Job description , job-specific certificates , job-specific interests , job-specific tasks , job requirements , job capabilities , job work values , job-related work activities , الوصف الوظيفي , الشهادات الخاصه بالوظيفه , الاهتمامات الخاصه بالوظيفة المهام الخاصه بالوظيفة , متطلبات الوظيفة , قدرات الوظيفة , قيم عمل الوظيفة , انشطة العمل المتلقة بالوظيفة'
      },
    }
  },
  methods:{
    ...mapActions({
        'all_jobs_action':'jobs/allJobsAction',
        'getJobsByName':'jobs/getJobsByName',
    }),
    SearchNames(){

        var data = this.search_jobs(document.filters,document.more_filters)

        this.current_page = 2;
        this.getJobsByName(data);
    }
  },
  mounted() {
    this.$store.dispatch('jobs/allJobsAction',{empty:true});
    this.lang = localStorage.getItem('lang');
  },
  head() {
    return {
      title: 'الوصف الوظيفي لجميع الوظائف | jobs definition',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta['description']
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.meta['keywords']
        }
      ],

    }
  },

  computed:{
    ...mapGetters({
      'jobs_data':'jobs/getData',
      'getTotal':'jobs/getTotal'
    })
  },
}
</script>

<style lang="scss">
@import "~style/variables";
.search-drop-down{
  width: 92%;
}
.jobs_data{
  .row{
    a{
      display: block;
      width: 100%;
      border: 1px solid #dddddd;
      color:$main_color;
      border-radius: 4px;
      padding: 8px;
      font-size: $normal !important;
      span:first-of-type{
        background-color: $main_color;
        color:white;
        padding: 2px 8px;
        border-radius: 3px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      span:last-of-type{
        color:$gray;
      }
    }
  }
}
</style>
