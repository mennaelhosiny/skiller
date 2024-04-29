<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3">{{ words.users_statistics }}</h1>
    <div class="container">
      <form method="post" @submit.prevent="search">
        <div class="row" v-if="words.filters">
          <div class="col-lg-3 col-md-6 mb-2" v-for="i in words.filters">
            <div>
              <label>{{ i['name'] }}</label>
              <input v-if="i['type'] != 'select'" class="form-control mb-2" :name="i['input']" :type="i['type']" >
              <select v-else class="form-control" :name="i['input']">
                <option value="">{{ words.select_best_choice }}</option>
                <option v-for="(i,index) in sk_groups" :key="index" :value="i['id']">{{ i['title'] }}</option>
              </select>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-2">
            <input type="submit" class="btn btn-primary w-100 position-relative top-3" :value="words.search">
          </div>

        </div>
      </form>
      <div class="skills_data mt-4" v-if="words.table">
        <div class="container">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <p class="mb-0">
              <span class="gray">{{ words.total }} : </span>
              <strong class="gray">{{ total_data }}</strong>
            </p>
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#update_skill"
                    @click="update_item(null)">{{ words.add_item }}</button>
          </div>
          <div class="infinite_scroll" action_path="dashboard/skills/allDataAction">
            <table class="table table-bordered table-hover table-striped">
              <thead>
              <tr>
                <td v-for="(name,index) in Object.values(words.table)" :key="index">{{ name }}</td>
                <td>{{ words.control }}</td>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(i,index) in coming_data" :key="index" :class="'tr_'+index">
                <td>{{ i['ar_title'] }}</td>
                <td>{{ i['en_title'] }}</td>
                <td>{{ i['ar_desc'] }}</td>
                <td>{{ i['en_desc'] }}</td>
                <td>{{ i['sk_group']['title'] }}</td>
                <td>{{ i['note'] }}</td>
                <td>
                  <button class="btn btn-outline-primary btn-sm"
                          data-bs-toggle="modal" data-bs-target="#update_skill"
                          @click="update_item(i)">{{ words['edit'] }}</button>
                  <button class="btn btn-outline-danger btn-sm"
                          @click="delete_item('skills',i['id'],'skills','.tr_'+index)"
                  >{{ words['delete'] }}</button>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <update_personal_data :item="item"></update_personal_data>

    </div>
  </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import update_personal_data from "../../components/Modals/update_skill_data";
import InfiniteScroll from "../../mixins/InfiniteScroll";
import UpdateItem from "../../mixins/UpdateItem";
import delete_item from "../../mixins/delete_item";
import {mapGetters , mapActions} from 'vuex';
export default {
  name: "skills",
  layout:"admin",
  mixins:[WordsLang,InfiniteScroll,UpdateItem,delete_item],
  components:{
    update_personal_data
  },
  methods:{
    ...mapActions({
      'all_skills_actions':'dashboard/skills/allDataAction',
      'all_sk_groups':'dashboard/sk_groups/allDataAction',
    }),
    search:function (){
      var data  = new FormData(event.target);
      data.append('empty',true);
      this.all_skills_actions(data)
    },
  },
  mounted() {
    this.all_skills_actions();
    this.all_sk_groups();
  },
  computed:{
    ...mapGetters({
      'coming_data':'dashboard/skills/getData',
      'total_data':'dashboard/skills/getTotal',
      'sk_groups':'dashboard/sk_groups/getData',
    })
  },
  data(){
    return {
      dashboard_name:this.$route.path.split('/')[this.$route.path.split('/').length - 1]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

</style>
