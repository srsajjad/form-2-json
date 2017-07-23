# form-2-json

## A small module to transform form data to JSON

## This is the Promise version of the package


Usage
===

Install the package

```sh
npm install form-2-json --save
```

Import it
```js
import f2j from 'form-2-json'
```

Use it
```js
function handleSubmit (e) {
  e.preventDefault()

  f2j(e.target, null, 2).then(json => {
    // do whatever you want with the stringified json
  })
}


...addEventListener('submit', handleSubmit)
```

Or using async-await
```js
async function handleSubmit (e) {
  e.preventDefault()

  const json = await f2j(e.target, null, 4) // format the json with 4-space indent
  // do whatever
}
```

In both of those examples we pass 3 arguments,  
**First**, The form element (referenced through event target)

The last 2 arguments are arguments for `JSON.stringify` and are passed directly to that function call