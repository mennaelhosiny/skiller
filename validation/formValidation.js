
export default function (data,target,url = '',reset = false,router = null){
  $(target).find('p.alert-danger').html('').hide();
  // check if there are any errors
  if(data.hasOwnProperty('status') && data.status != 200){
    if(typeof data.errors == 'string'){
      Toast.fire({
        icon: 'error',
        title: data.errors
      });
    }else {
      for (let error of Object.keys(data.errors)) {
        let err = '';

        if (typeof data.errors[error] == 'string') {
          err = data.errors[error];
        } else {
          err = data.errors[error].join(',');
        }
        var input = $(target).find('input[name="' + error + '"],select[name="' + error + '"],textarea[name="' + error + '"]');
        if (input.length > 0) {
          input.next().html(err).fadeIn();
        } else {
          // not found
          Toast.fire({
            icon: 'error',
            title: err
          });
        }
      }
    }
  }
  // check if i have success data
  else if(data.hasOwnProperty('status') && data.status == 200){
    // check if i have message property
    if(data.hasOwnProperty('message') && data.message.length > 0) {
      Toast.fire({
        icon: 'success',
        title: typeof data.message == "string" ? data.message:data.message.toString()
      });
    }
    if(reset == true){
      target.reset();
      sessionStorage.clear();
     // $('.modal').modal('hide');
    }
    // check if visit another page
    if(url != ''){
      setTimeout(()=>{
        router.push(url);
       // window.vm.$inertia.visit(url);
      },2000);
    }

  }

}
