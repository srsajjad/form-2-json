module.exports = form => {
  const { FormData } = window
  if (typeof FormData === 'undefined') {
    throw new Error('Your browser doesn\'t support FormData API')
  }

  const myData = new FormData(form)
  const obj = {}

  for (item of myData) {
    const [key, val] = item
    if (obj.hasOwnProperty(key) {
        obj[key] = [].concat(obj[key], val)
    } else {
       obj[key] = val
    }
  }

  return JSON.stringify(obj, null, 2)
}
