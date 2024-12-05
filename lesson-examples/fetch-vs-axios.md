```js
fetch("/api/endpoint")
  .then((response) => response.json()) // Extra step to parse the body
  .then((data) => console.log(data));

// Versus Axios:
axios.get("/api/endpoint").then((response) => console.log(response.data)); // Already parsed
```
