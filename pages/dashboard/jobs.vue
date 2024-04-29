<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3">{{ words.main_title }}</h1>
    <div class="container">
      <div>
      </div>
      <form method="post" name="filters" @submit.prevent="search">
        <div class="row" v-if="words.filters">
          <div class="col-lg-3 col-md-6 mb-2" v-for="i in words.filters">
            <div>
              <label>{{ i['name'] }}</label>
              <input class="form-control mb-2" :name="i['input']" :type="i['type']" >
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-2">
            <input type="submit" class="btn btn-primary w-100 position-relative top-3 mt-4" :value="words.search">
          </div>
        </div>
        <p class="mb-0 blue cursor-pointer" data-bs-toggle="modal" data-bs-target="#job_info_filters_box">{{ words['more_filters'] }}</p>
      </form>
      <div class="users_data mt-4" v-if="words.table">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <p class="mb-0">
              <span class="gray">{{ words.total }} : </span>
              <strong class="gray">{{ jobs_total }}</strong>
            </p>
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#job_info_save_box"
                    @click="get_related_info(null)">{{ words.add_item }}</button>
          </div>
          <div class="infinite_scroll"  action_path="dashboard/jobs/allDataAction">
            <table class="table table-hover table-bordered table-striped">
              <thead>
              <tr>
                <td v-for="(name,index) in Object.values(words.table)" :key="index">{{ name }}</td>
                <td>{{ words.more_info }}</td>
                <td>{{ words.control }}</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(i,index) in jobs_data" :key="index" :class="'tr_'+index">
                <td>{{ i['ar_name'] }}</td>
                <td>{{ i['en_name'] }}</td>
                <td>{{ i['ar_desc'] }}</td>
                <td>{{ i['en_desc'] }}</td>
                <td>{{ !(i['parent_id'] == 0 || i['parent_id'] == null) ? i['parent']['name']:'' }}</td>
                <td>{{ i['status'] == 1 ? words['active']:words['disable'] }}</td>
                <td>
                  <button class="btn btn-outline-primary btn-sm w-100"
                          data-bs-toggle="modal" data-bs-target="#more_info"
                          @click="get_related_info(i)">{{ words['open'] }}</button>
                </td>
                <td>
                  <button class="btn btn-outline-primary btn-sm"
                          data-bs-toggle="modal" data-bs-target="#job_info_save_box"
                          @click="get_related_info(i)">{{ words['edit'] }}</button>
                  <button class="btn btn-outline-danger btn-sm"
                          @click="delete_item('jobs',i['id'],'jobs','.tr_'+index)"
                  >{{ words['delete'] }}</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <job_info_view_box :item="all_job_info_data"></job_info_view_box>
      <job_info_save_box :item="all_job_info_data" :parents="all_parents"></job_info_save_box>
      <job_info_filters_box></job_info_filters_box>

    </div>
  </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import update_personal_data from "../../components/Modals/candidate/update_personal_data";
import InfiniteScroll from "../../mixins/InfiniteScroll";
import UpdateItem from "../../mixins/UpdateItem";
import delete_item from "../../mixins/delete_item";
import Job_info_view_box from "../../components/Modals/job_info_view_box";
import Job_info_save_box from "../../components/Modals/job_info_save_box";
import filters_jobs_search from "../../mixins/filters_jobs_search";
import {mapGetters , mapActions} from 'vuex';
import Job_info_filters_box from "../../components/Modals/job_info_filters_box";

export default {
  name: "index",
  layout:"admin",
  mixins:[WordsLang,InfiniteScroll,UpdateItem,delete_item,filters_jobs_search],
  components:{
    Job_info_filters_box,
    Job_info_save_box,
    Job_info_view_box,
    update_personal_data,
  },
  methods:{
    ...mapActions({
      'all_jobs_actions':'dashboard/jobs/allDataAction',
      'get_info_action':'dashboard/jobs/getInfoJob',
      'parents_action':'dashboard/jobs/parentsAction',
    }),
    search:function (){
      var data = this.search_jobs(document.filters,document.more_filters)


      data.append('empty',true);
      this.all_jobs_actions(data)
    },
    get_related_info(item){
      this.update_item(item);
      if(item != null) {
        this.get_info_action(item.id);
      }else{
        this.$store.commit('dashboard/jobs/SetItem',{});
      }
    }
  },
  mounted() {
    this.all_jobs_actions();
    this.parents_action();
  },
  computed:{
    ...mapGetters({
      'jobs_data':'dashboard/jobs/getData',
      'jobs_total':'dashboard/jobs/getTotal',
      'all_job_info_data':'dashboard/jobs/getItem',
      'all_parents':'dashboard/jobs/getParents',
    })
  },
  data(){
    return {
      dashboard_name:this.$route.path.split('/')[this.$route.path.split('/').length - 1],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

</style>
