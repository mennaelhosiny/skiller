<template>
  <!-- Modal of update personal data -->
  <div class="modal fade" id="update_personal_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <label>{{ words.username }}</label>
                    <span><i class="bi bi-person-circle"></i></span>
                    <input name="username" class="form-control"
                           :value="item != null ? item['username']:''"
                           required>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words.email }}</label>
                    <span><i class="bi bi-envelope"></i></span>
                    <input name="email" type="email" class="form-control"
                           :value="item != null ? item['email']:''"
                           required>
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words.password }}</label>
                    <span><i class="bi bi-lock"></i></span>
                    <input class="form-control" type="password" name="password"
                           :value="item != null ? item['password']:''"
                           :placeholder="words.leave_password">
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words.phone }}</label>
                    <span><i class="bi bi-phone"></i></span>
                    <input class="form-control" type="number" name="phone"
                           :value="item != null ? item['phone']:''"
                           required>
                  </div>
                </div>

                <div class="col-12 mb-2">
                  <div class="form-group position-relative input-icon flex-wrap">
                    <label>{{ words.country }}</label>
                    <span><i class="bi bi-arrow-down-short"></i></span>
                    <select class="form-control" name="country_id">
                      <option value="">{{ words.select_best_choice }}</option>
                      <option value="1" v-for="(i,index) in countries"
                              :value="i['id']" :selected="item != null && item['country']['id'] == i['id']"
                              :key="index">{{ i['name'] }}</option>
                    </select>
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
import WordsLang from "../../../mixins/WordsLang";
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
       'countries':'places/countries/getCountriesGetter'
    })
  },
  methods:{
    ...mapActions({
       'get_countries_action':'places/countries/getCountriesAction',
       'save_user_action':'dashboard/users/save_user'
    }),
    save_user(){
      let data = new FormData(event.target);
      this.save_user_action(data,event.target);
    },
  },
  mounted() {
    this.get_countries_action();
  }
}
</script>

<style scoped>

</style>
