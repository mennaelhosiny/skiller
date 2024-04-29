<template>
  <!-- Modal of update introduction video -->
  <div class="modal fade" id="update_personal_projects" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.update_projects_data }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group position-relative input-icon flex-wrap mb-2">
              <label class="d-flex align-items-center">
                <span class="mrl-half">{{ words.project_title }}</span>
                <span class="red">*</span>
              </label>
              <span><i class="bi bi-info-circle"></i></span>
              <input class="form-control" name="employer">
            </div>
            <div class="row mb-2">
              <div class="col-lg-6">
                <label>{{ words.start_date }}</label>
                <input type="date" class="form-control" name="start_date">
              </div>
              <div class="col-lg-6">
                <div class="mb-2">
                  <label>{{ words.end_date }}</label>
                  <input type="date" class="form-control" name="start_date">
                </div>
              </div>
            </div>
            <div class="mb-2">
              <label>
                <span class="mrl-half">{{ words.description }}</span>
                <span class="gray">({{ words.optional }})</span>
              </label>
              <textarea class="form-control editor" name="description"
                        :placeholder="words.short_description"></textarea>
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
  name: "update_personal_projects",
  data(){
    return {
      file_name:'modals/update_education_data',
    }
  },
  mixins:[WordsLang],
}
</script>

