export default{
  name:'copy_content',
  data(){
    return {
      count_explore:0,
    }
  },
  mounted() {
    console.log(this.$auth.loggedIn);
    this.guest_action();
  },
  methods:{
    guest_action(){
      if(localStorage.hasOwnProperty('user_view_obj') && this.$auth.loggedIn == undefined){
        var obj = JSON.parse(localStorage.getItem('user_view_obj'));
        this.count_explore = obj.count;
        if(document.URL.split('/')[document.URL.split('/').length - 1 ] != 'jobs'){
          obj.count = obj.count + 1;
          localStorage.setItem('user_view_obj',JSON.stringify(obj));
        }
      }
    }
  }
}
