import cookie from "cookie";

export default function ({ store, redirect, route , req , $auth}) {


  if(route.path.indexOf('dashboard') >= 0){
    if($auth.loggedIn != true){
       return redirect('/')
    }else if($auth.$state.user.hasOwnProperty('role') && $auth.$state.user.role.name != 'admin'){
      return redirect('/')
    }
  }



}
