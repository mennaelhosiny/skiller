<template>
  <!-- Modal of update introduction video -->
  <div class="modal fade" id="update_personal_certificate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.update_certificate_data }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="file_upload mb-2">
              <div>
                <span class="mrl-1">{{ words.upload_certificate_here }}</span>
                <span class="gray"><i class="bi bi-cloud-arrow-up"></i></span>
              </div>
              <input type="file" name="video" required>
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
  name: "update_personal_certificate",
  data(){
    return {
      file_name:'modals/update_language_certificate_data',
    }
  },
  mixins:[WordsLang],
}
</script>

