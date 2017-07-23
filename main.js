import Promise from 'promise-polyfill'

export default function (form, ...json) {
  const { FormData } = window
  if (typeof FormData === 'undefined') {
    throw new Error("Your browser doesn't support FormData API")
  }

  return new Promise((resolve, reject) => {
    const myData = new FormData(form)
    const obj = {}
    try {
      for (let item of myData) {
        const [key, val] = item

        if (obj.hasOwnProperty(key)) {
          obj[key] = [].concat(obj[key], val)
        } else {
          obj[key] = val
        }
      }
    } catch (err) {
      reject(err)
    }
    resolve(JSON.stringify(obj, ...json))
  })
}
