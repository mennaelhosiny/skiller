<template>
  <!-- Modal of update introduction video -->
  <div class="modal fade" id="display_introduction_video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.display_introduction }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           <video class="w-100" controls loop autoplay src="http://teslaelectric-eg.com/assets/mp4/bg.mp4"></video>
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
  name: "display_video",
  mixins:[WordsLang],
  data(){
    return {
      file_name:'modals/display_personal_video',
    }
  },
}
</script>

