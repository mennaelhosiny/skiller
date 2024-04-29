<template>
  <!-- Modal of update personal data -->
  <div class="modal fade" id="more_info" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ words.show_all_info }}</h5>
          <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
           <ul class="list-types d-flex align-item-center justify-content-between mb-4" v-if="words['jobs_types_data']">
             <li v-for="(i,index) in Object.values(words['jobs_types_data'])"
                 :key="index" :class="index == 0 ? 'active':''">{{ i }}
             </li>
           </ul>
           <div class="content" v-if="Object.keys(item).length > 0">
             <div :class="i" v-for="(i,index) in Object.keys(words['jobs_types_data'])" :key="index">
               <div class="data" v-if="i == 'main_info' && item != null">
                 <div class="row" v-if="words['main_info_inputs']">
                   <div class="col-lg-6 col-12 mb-2" v-for="(d,ind) in words['main_info_inputs']" :key="ind">
                     <p class="mb-0">
                       <strong>{{ d['name'] }} : </strong>
                       <span class="position-relative top-1" v-if="d['input'] == 'parent_id' && item['parent'] != null">{{ item['parent']['name'] }}</span>
                       <span class="position-relative top-1" v-else>{{ item[d['input']] }}</span>
                     </p>
                   </div>
                 </div>
               </div>
                <div class="data" v-else-if="item[i] != null && item[i].length > 0">
                  <div class="row" v-for="(data,index) in  item[i]" :key="index">
                    <div class="col-lg-6 col-12 mb-2" v-for="d in Object.keys(words['modal_body_info'])" :key="d">
                      <p class="mb-0">
                        <strong>{{ words['modal_body_info'][d] }} : </strong>
                        <span class="position-relative top-1">{{ data[d] }}</span>
                      </p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
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
  name: "job_info_view_box",
  props:['item'],
  mixins:[WordsLang],
  data(){
    return {
      file_name:'modals/update_personal_data',
    }
  },

}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
.modal-dialog{
  width:96%;
  max-width: 96%;
}
.modal{
  ul{
    border-bottom: 1px solid #ddd;
    padding-bottom: 17px;
    li{
      cursor: pointer;
      &:hover{
        @extend .active
      }
    }
    li.active{
      font-weight: bold;
      color:$blue;
    }
  }
  .content{
    >div:not(:first-of-type){
      display: none;
    }
  }
}
</style>
