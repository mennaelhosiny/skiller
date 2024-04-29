<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3" v-if="words['profile']">
      {{ words.profile[dashboard_name] }} {{ words.related_to }} احمد علي
    </h1>
    <div class="container">
       <table class="table table-hover table-stripped text-center table-responsive table-bordered" v-if="words[dashboard_name]">
         <thead>
            <tr>
              <td v-for="(column,index) in words[dashboard_name]" :key="index">
                {{  column['name'].indexOf('(') > 0 ? column['name'].substring(0,column['name'].indexOf('(')) : column['name']}}
              </td>
              <td>
                {{ words.actions['name'] }}
              </td>
            </tr>
         </thead>
         <tbody>
          <tr>
            <td v-for="(column,index) in words[dashboard_name]" :key="index">
              <img v-if="dashboard_name.indexOf('certifi') >= 0" src="/images/certificates/1.png">
              <span v-else>test</span>
            </td>
            <td>
              <span v-tooltip="words.actions['edit']"
                    data-bs-toggle="modal"
                    data-bs-target=".modal"
                    class="mrl-1 cursor-pointer open-box-modal"><i class="bi bi-pencil-square"></i></span>

              <span v-tooltip="words.actions['delete']" class="red cursor-pointer">
                <i class="bi bi-trash remove-element delete"></i>
              </span>
            </td>
          </tr>
         </tbody>
       </table>
       <div v-if="$options.components['box-modal']">
         <box-modal></box-modal>
       </div>
    </div>
  </div>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import $ from 'jquery';
export default {
  name: "index",
  layout:"admin",
  mixins:[WordsLang],
  data(){
    return {
      dashboard_name:this.$route.query.type,
      model_box:null,
    }
  },
  mounted ()  {
    var model_name = this.dashboard_name;
    var exceptions = ['projects','skills'];
    if(this.dashboard_name[this.dashboard_name.length - 1] == 's' &&(!(exceptions.includes(this.dashboard_name)))){
      model_name = this.dashboard_name.slice(0,-1)
    }
    this.$options.components['box-modal'] = () => import('../../../components/Modals/candidate/update_personal_'+model_name);
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
table{
  border-radius: 8px;
  img{
    width: 200px;
  }
}
</style>

