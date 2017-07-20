# form-2-json

## a small module to transform form data into json

```js
import form2json from 'from-2-json'
```

then inside your form-submission callback function, call the imported
function ```form2json``` and provide event.target as parameter. Like-

```
form2json(event.target)
```

this function will return a ```json```

Example

```js
function handleSubmit (e) {
  e.preventDefault()
  let myjson = form2json(e.target)
  console.log(myjson)
}
```