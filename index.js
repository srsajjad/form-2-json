export let form2json = form => {
  const { FormData } = window
  if (typeof FormData === 'undefined') {
    throw new Error("Your browser doesn't support FormData API")
  }
  const myData = new FormData(form)
  const obj = {}
  new Set(Array.from(myData.keys())).forEach(n => {
    let valueArr = myData.getAll(n)
    if (valueArr.length === 1) obj[n] = valueArr[0]
    if (valueArr.length > 1) obj[n] = valueArr
  })
  return JSON.stringify(obj, null, 2)
}
