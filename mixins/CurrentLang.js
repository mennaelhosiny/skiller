export default {
  name:'CurrentLang',
  data(){
    return {
        current_lang:'',
    }
  },
  mounted() {
    if(localStorage.getItem('lang') != undefined){
      this.current_lang = localStorage.getItem('lang');
    }else{
      this.current_lang = 'ar';
    }
  }
}
