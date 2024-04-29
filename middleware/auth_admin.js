import cookie from "cookie";

export default (function({route,app,req,redirect}){

  var token = process.client ?
    localStorage.getItem('token'):cookie.parse(req.headers.cookie || '').token;
  console.log(token);
  if(!(token)){
    if(route.path.split('register')[1] == undefined){
      return redirect('/auth/login');
    }
    if(route.path.split('dashboard')[1] != undefined){
      // this is dashboard
    }

  }else{
    if(route.path.split('/').includes('auth')){
      // user try to enter login or register even if he is authenticated
      return redirect('/');
    }
    // user is authenticated

  }

});
