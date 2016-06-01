class ValidationError extends Error {
    constructor(message) {
        super(message);
        // passing it to super doesn't work for some reason
        this.message = message;
    }
}

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
        if(r.error) {
          return Promise.reject(new ValidationError(r.error));
        }
        console.log('here in then', r);
        return r.value;
      })
      .catch(error => {
        if(error instanceof ValidationError) {
          return Promise.reject(error);
        }

        console.log('here in catch');
        throw "API borked";
      });
  }
};
