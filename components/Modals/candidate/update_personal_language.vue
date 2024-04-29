<template>
  <!-- Modal of update introduction video -->
  <div class="modal fade" id="update_personal_language" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.update_language_data }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group position-relative input-icon flex-wrap mb-2">
              <label class="d-flex align-items-center">
                <span class="mrl-half">{{ words.language_name }}</span>
                <span class="red">*</span>
              </label>
              <span><i class="bi bi-info-circle"></i></span>
              <input class="form-control" name="name">
            </div>
            <div class="col-12 mb-2">
              <div class="form-group position-relative input-icon flex-wrap">
                <label>{{ words.level }}</label>
                <span><i class="bi bi-arrow-down-short"></i></span>
                <select class="form-control" name="country_id">
                  <option value="">{{ words.select_best_choice }}</option>
                  <option value="1" v-for="i in 4">good</option>
                </select>
              </div>
            </div>
            <div class="form-group position-relative input-icon flex-wrap mb-2">
              <input class="btn btn-primary" type="submit" :value="words.save">
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
export default {
  name: "update_personal_language",
  data(){
    return {
      file_name:'modals/update_language_certificate_data',
    }
  },
  mixins:[WordsLang],
}
</script>

