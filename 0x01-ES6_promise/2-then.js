#!/usr/bin/node

export default function handleResponseFromAPI (promise) {
  promise.then(function () {
    console.log('handleResponseFromAPI');
  }
    .then({ status: 200, body: 'Success' })
    .catch(Error));
}
