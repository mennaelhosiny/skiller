<template>
  <!-- Modal of update personal data -->
  <div class="modal fade" id="job_info_filters_box" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form method="post" name="more_filters" >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ words.filter_searches }}</h5>
            <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p class="d-flex justify-content-end">
              <span class="blue cursor-pointer" @click="clear_tags">{{ words.clear_filters }}</span>
            </p>
            <div class="content" v-if="words['jobs_types_data']">
              <div :class="i" v-for="(i,index) in Object.keys(words['jobs_types_data'])" :key="index">

                <div class="data mb-3" v-if="i != 'main_info'">
                  <p class="mb-1"><strong>{{ words['jobs_types_data'][i] }}</strong></p>
                  <tags-inputs :table="'job_'+i" :data="[]"></tags-inputs>

                </div>
              </div>
            </div>


          </div>
          <div class="modal-footer d-flex justify-content-between">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
          </div>
        </div>
      </form>


    </div>
  </div>

</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import TagsInputs from "../TagsInputs";
import delete_item from "../../mixins/delete_item";
import {mapActions} from 'vuex';
export default {
  name: "job_info_filters_box",
  mixins:[WordsLang,delete_item],
  mounted() {
// Dynamically import component
  },
  components:{
    TagsInputs
  },

  data(){
    return {
      file_name:'modals/update_personal_data',
      item_info:null,
    }
  },
  methods:{
    clear_tags:function(){
       for (let com of this.$children){
         if(com.data.length > 0){
            com.data = [];
         }
       }
    }
  },
  watch:{

  }

}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

</style>
