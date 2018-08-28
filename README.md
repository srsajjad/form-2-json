```yarn add form-2-json```

input fields inside the form, must have ```name``` attribute, like -

```<input name='age' />```

```javascript
import { form2json } from 'form-2-json'
```

```javascript
form2json(event.target)
```

this function will return a json

## Example

```javascript
document.querySelecor('form').addEventListener('submit', handleSubmit)
```

```javascript
function handleSubmit (e) {
  e.preventDefault()
  let myjson = form2json(e.target)
  console.log(myjson)
}
```