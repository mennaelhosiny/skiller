
export default {
  data(){
    return {
      current_position:0,
      current_page:2,
      action_path:'',
    }
  },
  methods:{

  },
  mounted(){
    var com = this;
    setTimeout( ()=> {
      if ($('#__nuxt').find('.infinite_scroll').length > 0) {
        $(window).scrollTop(0)
        this.action_path = $('#__nuxt').find('.infinite_scroll').attr('action_path');
        var max_scroll = window.scrollMaxY; // infinite_scroll_form
        var continue_status = true;
        $(window).on('scroll', async function () {
          var data = new FormData($('#__nuxt').find('.infinite_scroll_form')[0]);
          console.log($(document).height());
          console.log($(window).scrollTop());
          if($(document).height()-$(window).scrollTop() >= 50){
            com.current_position = 0;
          }
          if ($(window).scrollTop() > com.current_position && $(window).scrollTop() - com.current_position >= 100 && continue_status == true) {

         // if ($(document).height() - $(window).scrollTop() <= 1000 && continue_status == true) {
            continue_status = false;
            com.current_position = $(window).scrollTop();
           // console.log(com.action_path);
            if (com.action_path != '') {
              data.append('page', com.current_page);
              console.log(com.payload_form);
              if(com.payload_form){
                for(let item of Object.keys(com.payload_form)){
                  console.log(item);
                  console.log(com.payload_form[item]);
                  data.append(item, com.payload_form[item]);
                }
              }
              await com.$store.dispatch(com.action_path, data);
              com.current_page++;
              continue_status = true;
            }
          }
        });
      }
    },500);
  }
}
