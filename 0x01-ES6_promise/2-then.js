#!/usr/bin/node

export default function function handleResponseFromAPI(promise) {
	promise.then (() => {
		console.log('Got a response from the API');
		return { status: 200, body: 'success' };
	})
		.catch (() => new Error());
}
