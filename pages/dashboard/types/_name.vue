<template>
  <div class="dashboard" v-if="words['page']">
    <h1 class="text-center fw-bold blue mb-3 mt-3">
      {{ words['statistics'] }}
      {{ words['page'][dashboard_name] }}
    </h1>
    <div class="container">
      <form method="post" @submit.prevent="search">
        <input type="hidden" name="table" :value="dashboard_name">
        <input type="hidden" name="admin" :value="true">
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
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#update_info"
                    @click="update_item(null)">{{ words.add_item }}</button>
          </div>
          <div class="infinite_scroll" action_path="dashboard/types_names/allDataAction">
            <table class="table table-bordered table-hover table-striped">
              <thead>
              <tr>
                <td v-if="dashboard_name == 'certificates'">{{ words.image }}</td>
                <td v-for="(name,index) in Object.values(words.table)" :key="index">{{ name }}</td>
                <td>{{ words.control }}</td>
              </tr>
              </thead>
              <tbody>
                 <tr v-for="(i,index) in coming_data" :key="index" :class="'tr_'+index">
                   <td v-if="dashboard_name == 'certificates'">
                     <image-component :src="'certificates/'+i['image']"></image-component>
                   </td>
                   <td>{{ i['ar_title'] }}</td>
                   <td>{{ i['en_title'] }}</td>
                   <td>{{ i['ar_desc'] }}</td>
                   <td>{{ i['en_desc'] }}</td>
                   <td>
                     <button class="btn btn-outline-primary btn-sm"
                             data-bs-toggle="modal" data-bs-target="#update_info"
                             @click="update_item(i)">{{ words['edit'] }}</button>
                     <button class="btn btn-outline-danger btn-sm"
                             @click="delete_item(dashboard_name,i['id'],dashboard_name,'.tr_'+index)"
                     >{{ words['delete'] }}</button>
                   </td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
    <!-- Modal of update info  -->
    <div class="modal fade" id="update_info" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ words['edit']+' '+words['page'][dashboard_name] }}</h5>
            <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <form method="post" @submit.prevent="save_item">
              <input type="hidden" name="id" v-if="item != null" :value="item['id']">
              <input type="hidden" name="table" :value="dashboard_name">
              <div class="selector" v-if="dashboard_name == 'certificates' && item != null">
                <image-component :src="'certificates/'+item['image']"></image-component>
              </div>
              <div class="row p-2">
                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words['table']['ar_name'] }}</label>
                    <span><i class="bi bi-info"></i></span>
                    <input name="ar_title" class="form-control"
                           :value="item != null ? item['ar_title']:''"
                           required>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words['table']['en_name'] }}</label>
                    <span><i class="bi bi-info"></i></span>
                    <input name="en_title" class="form-control"
                           :value="item != null ? item['en_title']:''"
                           required>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words['table']['ar_desc'] }}</label>
                    <span><i class="bi bi-info"></i></span>
                    <textarea name="ar_desc" class="form-control"
                           :value="item != null ? item['ar_desc']:''"
                              required></textarea>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words['table']['en_desc'] }}</label>
                    <span><i class="bi bi-info"></i></span>
                    <textarea name="en_desc" class="form-control"
                              :value="item != null ? item['en_desc']:''"
                              required></textarea>
                  </div>
                </div>

                <div class="col-12 mb-2" v-if="dashboard_name == 'certificates'" >
                  <div class="file_upload mb-2">
                    <div>
                      <span class="mrl-1">{{ words.upload_file_here }}</span>
                      <span class="gray"><i class="bi bi-cloud-arrow-up"></i></span>
                    </div>
                    <input type="file" class="preview-image" selector=".selector img" name="image" required>
                  </div>
                </div>

              </div>
              <div>
                <div class="mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <input class="btn btn-primary" type="submit" :value="words.save">
                  </div>
                </div>
              </div>
            </form>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import update_personal_data from "../../../components/Modals/update_skill_data";
import InfiniteScroll from "../../../mixins/InfiniteScroll";
import UpdateItem from "../../../mixins/UpdateItem";
import delete_item from "../../../mixins/delete_item";
import ImageComponent from "../../../components/ImageComponent";
import {mapGetters , mapActions} from 'vuex';
export default {
  name: "_name",
  layout:"admin",
  mixins:[WordsLang,InfiniteScroll,UpdateItem,delete_item],
  components:{
    update_personal_data,
    ImageComponent
  },
  methods:{
    ...mapActions({
      'all_data':'dashboard/types_names/allDataAction',
      'save_data':'dashboard/types_names/save_data',
    }),
    search:function (){
      var data  = new FormData(event.target);
      data.append('empty',true);
      this.all_data(data)
    },
    save_item(){
      var data = new FormData(event.target);
      this.save_data(data,event.target);
    },
  },
  mounted() {
    var data = new FormData();
    data.append('table',this.dashboard_name);
    data.append('empty',true);
    data.append('admin',true);
    this.all_data(data);
    this.payload_form['table'] = this.dashboard_name;
  },
  computed:{
    ...mapGetters({
      'coming_data':'dashboard/types_names/getData',
      'total_data':'dashboard/types_names/getTotal',
      'current_status':'dashboard/types_names/getStatus'
    })
  },
  created() {
    if(!(this.valid_pages.includes(this.dashboard_name))){
       return this.$router.push('/dashboard');
    }
  },
  data(){
    return {
      dashboard_name:this.$route.path.split('/')[this.$route.path.split('/').length - 1],
      valid_pages:['abilities','certificates','educations','interests','competencies','knowledge'
        ,'references','skills_groups','work_activities','work_contexts','work_values'],
      payload_form:{}
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

</style>
