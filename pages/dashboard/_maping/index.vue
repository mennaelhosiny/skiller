<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3" v-if="words[dashboard_name]">
      {{ words[dashboard_name] }}
    </h1>
    <div class="container">
      <div class="filters mb-5">
        <form method="post" @submit.prevent="search">
          <div class="row">
            <div class="col" v-for="(c,index) in words[map_columns]" :key="index">
              <div class="form-group position-relative input-icon flex-wrap mb-2">
                <label>{{ c['name'] }}</label>
                <span><i class="bi bi-info-circle"></i></span>
                <input class="form-control" :name="c['input']" v-if="c['type'] == 'text'">
                <select class="form-control" :name="c['input']" required v-else>
                  <option value="">{{ words['select_from_list'] }}</option>
                </select>
              </div>
            </div>
            <div class="col">
              <div class="form-group position-relative input-icon flex-wrap mb-2">
                <input type="submit" class="w-100 btn btn-primary position-relative mt-4 top-6" :value="words.filter">
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-3">
        <p class="mb-0">
          <span class="gray">{{ words.total }} : </span>
          <strong class="gray">{{ total_data }}</strong>
        </p>
        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target=".modal"
                @click="update_item(null)">{{ words.add_item }}</button>
      </div>
      <table class="table table-hover table-stripped text-center table-responsive table-bordered" v-if="words[map_columns]">
        <thead>
        <tr>
          <td v-for="(column,index) in Object.values(words[map_columns+'_table'])"
              :class="'tr_'+index"
              :key="index">
            {{  column }}
          </td>
          <td>
            {{ words.actions['name'] }}
          </td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(i,index) in country_modal_getters" :key="index" :class="'tr_'+index">
          <td>
            {{ i['ar_name'] }}
          </td>
          <td>{{ i['en_name'] }}</td>
          <td>
            <button class="btn btn-outline-primary btn-sm open-box-modal"
                    data-bs-target=".modal"
                    data-bs-toggle="modal"
                    @click="update_item(i)">{{ words.actions['edit'] }}</button>
            <button class="btn btn-outline-danger btn-sm"
                    @click="delete_item('countries',i['id'],'countries','.tr_'+index)"
            >{{ words.actions['delete'] }}</button>

          </td>
        </tr>
        </tbody>
      </table>

      <!-- Modal of insert of update data -->
      <div class="modal fade" id="update_data" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" v-if="words['actions']">
                 {{ words['actions']['add'] +' '+ words['info'] }} {{ (map_columns == 'country_modal'?words['country']:words['city']) }}
              </h5>
              <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form v-if="words[map_columns]" method="post" @submit.prevent="save_item">
                <input type="hidden" name="id" v-if="item != null" :value="item['id']">
                <div class="form-group position-relative input-icon flex-wrap mb-2"
                     v-for="(c,index) in Object.keys(words[map_columns+'_table'])" :key="index">
                  <label>{{ words[map_columns+'_table'][c] }}</label>
                  <span><i class="bi bi-info-circle"></i></span>
                  <input class="form-control" :name="c"
                         :value="item != null ? item[c]:''"
                         required>
                </div>
                <div class="form-group position-relative input-icon flex-wrap mb-2">
                  <input class="btn btn-primary" type="submit" :value="words['actions']['save']">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ words.close }}</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import WordsLang from "../../../mixins/WordsLang";
import delete_item from "../../../mixins/delete_item";
import UpdateItem from "../../../mixins/UpdateItem";
import {mapActions,mapGetters} from 'vuex';
export default {
  name: "map",
  layout:"admin",
  mixins:[WordsLang,delete_item,UpdateItem],
  validate({params}){
    return ['countries','cities'].includes(params.maping);
  },
  methods:{
    ...mapActions({
       'country_modal_action':'places/countries/getCountriesDashAction',
       'save_data':'places/countries/save_data',
    }),
    save_item(){
      var data = new FormData(event.target);
      this.save_data(data,event.target);
    },
    search:function (){
      var data  = new FormData(event.target);
      data.append('empty',true);
      this.country_modal_action(data)
    },
  },
  computed:{
     ...mapGetters({
       'country_modal_getters':'places/countries/getCountriesGetter',
       'total_data':'places/countries/getTotal',
     })
  },
  data(){
    return {
      file_name:'dashboard_map',
      dashboard_name:this.$route.params.maping,
      name:'country',
      map_columns:'',
    }
  },
  mounted() {
    if(this.dashboard_name == 'countries'){
      this.map_columns = 'country_modal';
      var data = new FormData();
      data.append('empty',true);
      this.country_modal_action(data);
    }else{
      this.map_columns = 'city_modal';
    }
  }
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

