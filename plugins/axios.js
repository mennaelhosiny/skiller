import cookie from 'cookie'

export default ({ $axios, req }, inject) => {

  $axios.setHeader("api_key","skillar2023");

  $axios.setHeader("lang",process.client ?
    localStorage.getItem('lang'):cookie.parse(req.headers.cookie || '').lang);

  //$axios.setHeader("auth-token",process.client ? localStorage.getItem('token'):null);
  $axios.setHeader("token",process.client ?
    localStorage.getItem('token'):cookie.parse(req.headers.cookie || '').token);

  $axios.onResponse(res => {
    /*if(res.data.hasOwnProperty('errors')){
      if(res.data.errors[0] == 'The token could not be parsed from the request'){
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        localStorage.removeItem('user_info');
        window.location = '/auth/login'
      }
    }*/
  })

}
