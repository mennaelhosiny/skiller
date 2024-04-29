<template>
  <!-- Modal of update introduction video -->
  <div class="modal fade" id="feedback" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form method="post">
            <div class="mb-2">
              <textarea class="form-control editor"
                        name="description" :placeholder="words.short_description"></textarea>
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
import WordsLang from "../../mixins/WordsLang";
export default {
  name: "send_feedback",
  props:['title','job_id'],
  data(){
    return {
      file_name:'modals/feedback',
    }
  },
  mixins:[WordsLang],
}
</script>

