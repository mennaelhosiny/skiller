<template>
<!--  :typeahead-hide-discard="true"-->
  <VoerroTagsInput :element-id="table"
                   v-model="data"
                   :value="data"
                   placeholder="search for what you want"
                   @keyup="searchTags"
                   :existing-tags="tags_data_getter"
                   :typeahead="true"></VoerroTagsInput>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "TagsInputs",
  props:['table','data'],
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters({
       'tags_data_getter':'tags_input/getData'
    })
  },
  methods:{
    ...mapActions({
       'get_tags_action':'tags_input/getTags',
    }),
    async searchTags() {
      var search = event.target.value;
      if(search.length > 0) {
        var data = {
          search: search,
          table: this.table.replace('job_','')
        }
       await this.get_tags_action(data);
      }
    },
  }
}
</script>

<style scoped>

</style>
