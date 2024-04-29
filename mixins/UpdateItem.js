export default{
  name:'UpdateItem',
  data(){
    return {
       item:null
    }
  },
  methods:{
    update_item(item){
      this.item = item;
    },
  }
}


