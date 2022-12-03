var myHeaders = new Headers();
myHeaders.append("apikey", APIKEY);

export var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
