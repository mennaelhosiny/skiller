export default {
    name:'WordsLang',
    data(){
      return {
          words:[],
      }
    },
    created() {
      if (process.client) {
        let com = this;
        let lang = '';
        let file = '';
        if(localStorage.getItem('lang') != undefined){
          lang = localStorage.getItem('lang');
        }else{
          lang = 'ar';
        }
        if(this.file_name == undefined){
          file=this.$route.name.replaceAll('-','_');
        }else{
          file = this.file_name;
        }
        let words = import('~/lang/'+lang+'/'+file).then((e)=>{
          com.words = e.default;
        });
      }

    }
}
