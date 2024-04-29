<template>
  <!-- Modal of update personal data -->
  <div class="modal fade" id="job_info_save_box" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <form method="post" @submit.prevent="save_job_data">
        <input type="hidden" name="id" v-if="item.hasOwnProperty('id')" :value="item.id">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ words.show_all_info }}</h5>
            <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="list-types d-flex align-item-center justify-content-between mb-4 flex-wrap" v-if="words['jobs_types_data']">
              <li v-for="(i,index) in Object.values(words['jobs_types_data'])"
                  :key="index" :class="index == 0 ? 'active':''">{{ i }}
              </li>
              <li>{{ words.principle_contracts }}</li>
            </ul>
            <div class="content" v-if="words['jobs_types_data']">
              <div :class="i" v-for="(i,index) in Object.keys(words['jobs_types_data'])" :key="index">

                <div class="data" v-if="i == 'main_info'">

                  <div class="row" v-if="words['main_info_inputs']">
                    <div class="col-lg-6 col-12 mb-2" v-for="(d,index) in words['main_info_inputs']" :key="index">
                      <div>
                        <label>{{ d['name'] }} : </label>
                        <input class="form-control" :name="d['input']"
                               :type="d['type']" v-if="d['type'] == 'text'" :value="item != null ? item[d['input']]:''" >
                        <textarea class="form-control" :name="d['input']" v-else-if="d['type'] == 'textarea'"
                                  :value="item != null ? item[d['input']]:''" >{{ item != null ? item[d['input']]:'' }}</textarea>
                        <select v-else-if="d['type'] == 'select'" class="form-control" :name="d['input']" >
                          <option value="">{{ words['select_best_choice'] }}</option>
                          <option v-if="d.hasOwnProperty('toggle')" value="1"
                                  :selected="item != null && item[d['input']] == 1">{{ words.active }}</option>
                          <option v-if="d.hasOwnProperty('toggle')" value="0"
                                  :selected="item != null && item[d['input']] == 0">{{ words.disabled }}</option>
                          <option v-if="!(d.hasOwnProperty('toggle'))"
                                  v-for="(parent,index) in parents" :key="index"
                                  :value="parent.id" :selected="item != null && item.parent_id == parent.id">{{ parent.name }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="data" v-else>

                  <tags-inputs :table="'job_'+i" :data="item_info != null && item_info.hasOwnProperty(i) && item_info[i].length > 0 ? item_info[i].map((q)=>{ return {key:q['id'],value:q['ar_title']} }) : []"></tags-inputs>

                </div>
              </div>
              <div class="contracts_inputs">

                <div v-if="words">
                  <div class="row" v-if="Object.keys(item).length == 0 || (Object.keys(item).length > 0 && item.hasOwnProperty('principle_contracts') &&  item['principle_contracts'].length == 0)">
                    <div class="col-md-6 col-12 mb-2"
                         v-for="(input,index) in words['principle_contracts_inputs']" :key="index">
                      <label>{{ input['name'] }} : </label>
                      <input class="form-control" :name="'job_principle_contracts['+input['input']+'][]'"
                             :type="input['type']" v-if="input['type'] != 'textarea'"
                             >
                      <textarea class="form-control" :name="'job_principle_contracts['+input['input']+'][]'" v-else></textarea>

                    </div>
                  </div>
                  <div v-else-if="item">
                    <div class="row" v-for="(pci,key) in item['principle_contracts']" :key="key" :class="'tr_'+key">
                      <input type="hidden" :name="'job_principle_contracts[id][]'" :value="pci['id']">
                    <span class="red delete-icon-line"
                          @click="delete_item('job_principle_contracts',pci['id'],'job_principle_contracts','.tr_'+key)"
                          v-if="key > 0"><i class="bi bi-trash3"></i></span>
                      <div class="col-md-6 col-12 mb-2"
                           v-for="(input,index) in words['principle_contracts_inputs']" :key="index">
                        <label>{{ input['name'] }} : </label>
                        <input class="form-control" :name="'job_principle_contracts['+input['input']+'][]'"
                               :type="input['type']" v-if="input['type'] != 'textarea'"
                               :value="pci != null ? pci[input['input']]:''" >

                        <textarea class="form-control" :name="'job_principle_contracts['+input['input']+'][]'" v-else
                                  :value="pci != null ? pci[input['input']]:''" >{{  pci != null ? pci[input['input']]:'' }}</textarea>

                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-outline-primary copy_item"
                        type="button"
                        tag="div"
                        tag_class="row"
                        created_at=".contracts_inputs > div"
                        search=".contracts_inputs > div > div > div.row:first-of-type">{{ words['add_item'] }}</button>

              </div>
            </div>


          </div>
          <div class="modal-footer d-flex justify-content-between">
            <input type="submit" class="btn btn-primary" :value="words.save">
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
  name: "job_info_save_box",
  props:['item','parents'],
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
    ...mapActions({
       'save_job_data':'dashboard/jobs/save_job_information'
    }),
  },
  watch:{
    item:function (new_val){
      this.item_info = new_val;
    }
  }

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
