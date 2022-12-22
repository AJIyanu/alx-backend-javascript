#!/usr/bin/node

export default function function handleResponseFromAPI(promise) {
	promise.then (
		(result) => {
			console.log({result});
			console.log('Got a response from the API');
		}, (error) => {
			console.log('Got a response from the API');
		})
}
