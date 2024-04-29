<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3">{{ words.users_statistics }}</h1>
    <div class="container">
      <form method="post" @submit.prevent="search">
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
      </form>
      <div class="users_data mt-4" v-if="words.table">
        <div class="container">
          <div class="infinite_scroll" action_path="dashboard/users/allDataAction">
             <table class="table table-hover table-bordered table-striped">
               <thead>
                  <tr>
                    <td v-for="(name,index) in Object.values(words.table)" :key="index">{{ name }}</td>
                    <td>{{ words.control }}</td>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="(i,index) in users_data" :key="index" :class="'tr_'+index">
                    <td>{{ i['username'] }}</td>
                    <td>{{ i['email'] }}</td>
                    <td>{{ i['country']['name'] }}</td>
                    <td>{{ i['phone'] }}</td>
                    <td>
                      <button class="btn btn-outline-primary btn-sm"
                              data-bs-toggle="modal" data-bs-target="#update_personal_data"
                              @click="update_item(i)">{{ words['edit'] }}</button>
                      <button class="btn btn-outline-danger btn-sm"
                              @click="delete_item('users',i['id'],'User','.tr_'+index)"
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
import WordsLang from "../../../mixins/WordsLang";
import update_personal_data from "../../../components/Modals/candidate/update_personal_data";
import InfiniteScroll from "../../../mixins/InfiniteScroll";
import UpdateItem from "../../../mixins/UpdateItem";
import delete_item from "../../../mixins/delete_item";
import {mapGetters , mapActions} from 'vuex';
export default {
  name: "index",
  layout:"admin",
  mixins:[WordsLang,InfiniteScroll,UpdateItem,delete_item],
  components:{
    update_personal_data
  },
  methods:{
    ...mapActions({
      'all_users_actions':'dashboard/users/allDataAction',
    }),
    search:function (){
      console.log('search');
      var data  = new FormData(event.target);
      data.append('empty',true);
      this.all_users_actions(data)
    },
  },
  mounted() {
    var data = new FormData();
    data.append('empty',true);
    this.all_users_actions(data);
  },
  computed:{
    ...mapGetters({
      'users_data':'dashboard/users/getData',
      'users_total':'dashboard/users/getTotal',
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
