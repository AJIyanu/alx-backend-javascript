#!/usr/bin/node

export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(); // Simulate a delayed response
    }, 1000); // Wait for 1 second before resolving
  });
}
