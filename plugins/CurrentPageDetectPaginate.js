
export default function (payload , store = null){
  var page = '';
  if(payload instanceof FormData){
    if(payload.has('page')){
      page = '?page='+payload.get('page');
    }
  }else if(Object.keys(payload).length > 0 && payload.hasOwnProperty('page')){
    page = '?page='+payload['page'];
  }
  return page;
}
