var apiRoot = 'https://api.candycrm.com/';
var headers = new Headers({'content-type': "application/json; charset=utf-8"});

export default {
  post(url, data) {
    var options = {
      headers,
      method: 'POST',
      body: JSON.stringify(data)
    };

    return this.send(url, options);
  },
  send(url, options) {
    return fetch(`${apiRoot}${url}`, options)
      .then(r => r.json())
      .then(r => {
        return r.value;
      })
      .catch(e => {
        throw "API borked";
      });
  }
};
