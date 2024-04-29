export default{
  name:'copy_content',
  methods:{
    copy_content(copyBoxElement){
      var r = document.createRange();
      r.selectNode(copyBoxElement);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(r);
      try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        Toast.fire({
          icon:'success',
          title:this.words.copied_success,
        });
      } catch (err) {
        console.log('Unable to copy!');
      }
    }
  }
}


