### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callback functions
Promises
Async/Await
Event listeners and emitters
Generators and yield

- What is a Promise?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

- What are the differences between an async function and a regular function?
Async functions always return a promise.
Inside an async function, you can use the await keyword to wait for a promise to resolve.
Regular functions return values immediately, whereas async functions return a promise which resolves to a value.

- What is the difference between Node.js and Express.js?
Node.js is a runtime environment that allows you to run JavaScript on the server-side.
Express.js is a web application framework built on top of Node.js that simplifies tasks like routing, middleware, etc.

- What is the error-first callback pattern?
A convention in Node.js where callbacks are passed two arguments: the first is an error object (or null if no error), and the second is the resulting data.

- What is middleware?
Functions that have access to the request object, the response object, and the next middleware function in the application’s request-response cycle.

- What does the `next` function do?
A function in the Express middleware function stack that, when invoked, executes the middleware succeeding the current middleware.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
The requests are executed sequentially, which can be slow. They should be run concurrently using Promise.all or similar.
No error handling for failed network requests.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
