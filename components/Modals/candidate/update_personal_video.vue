<template>
  <!-- Modal of update introduction video -->
  <div class="modal fade" id="update_personal_video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.update_personal_data }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="file_upload mb-2">
               <div>
                  <span class="mrl-1">{{ words.upload_file_here }}</span>
                  <span class="gray"><i class="bi bi-cloud-arrow-up"></i></span>
               </div>
               <input type="file" name="video" required>
            </div>
            <div class="form-group position-relative input-icon flex-wrap">
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
  name: "update_personal_video",
  data(){
    return {
      file_name:'modals/update_personal_video',
    }
  },
  mixins:[WordsLang],
}
</script>

