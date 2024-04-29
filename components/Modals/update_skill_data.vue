<template>
  <!-- Modal of update personal data -->
  <div class="modal fade" id="update_skill" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.update_data }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form method="post" @submit.prevent="save_user">
            <input type="hidden" name="id" v-if="item != null" :value="item['id']">
            <div class="row p-2">
              <div class="col-12 mb-2">
                <div class="form-group position-relative input-icon flex-wrap">
                  <label>{{ words.ar_title }}</label>
                  <span><i class="bi bi-info"></i></span>
                  <input name="ar_title" class="form-control"
                         :value="item != null ? item['ar_title']:''"
                         required>
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group position-relative input-icon flex-wrap">
                  <label>{{ words.en_title }}</label>
                  <span><i class="bi bi-person-circle"></i></span>
                  <input name="en_title" class="form-control"
                         :value="item != null ? item['en_title']:''"
                         required>
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group position-relative input-icon flex-wrap">
                  <label>{{ words.ar_desc }}</label>
                  <span><i class="bi bi-info"></i></span>
                  <input name="ar_desc" class="form-control"
                         :value="item != null ? item['ar_desc']:''"
                         required>
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group position-relative input-icon flex-wrap">
                  <label>{{ words.en_desc }}</label>
                  <span><i class="bi bi-info"></i></span>
                  <input name="en_desc" class="form-control"
                         :value="item != null ? item['en_desc']:''"
                         required>
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group position-relative input-icon flex-wrap">
                  <label>{{ words.sk_group }}</label>
                  <span><i class="bi bi-arrow-down-short"></i></span>
                  <select class="form-control" name="sk_group_id">
                    <option value="">{{ words.select_best_choice }}</option>
                    <option  v-for="(i,index) in sk_groups"
                            :value="i['id']" :selected="item != null && item['sk_group']['id'] == i['id']"
                            :key="index">{{ i['title'] }}</option>
                  </select>
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group position-relative input-icon flex-wrap">
                  <label>{{ words.note }}</label>
                  <span><i class="bi bi-info"></i></span>
                  <input name="note" class="form-control"
                         :value="item != null ? item['note']:''"
                         >
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

</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: "update_personal_data",
  props:['item'],
  mixins:[WordsLang],
  data(){
    return {
      file_name:'modals/update_personal_data',
    }
  },
  computed:{
    ...mapGetters({
      'sk_groups':'dashboard/sk_groups/getData',
    })
  },
  methods:{
    ...mapActions({
      'all_sk_groups':'dashboard/sk_groups/allDataAction',
      'save_skill_action':'dashboard/skills/save_data'
    }),
    save_user(){
      let data = new FormData(event.target);
      this.save_skill_action(data,event.target);
    },
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
