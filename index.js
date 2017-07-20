let form2json = x => {
  let formData = new window.FormData(x)
  let obj = {}
  let myJSON

  new Set(Array.from(formData.keys())).forEach((n, i) => {
    let valueArr = formData.getAll(n)
    if (valueArr.length === 1) {
      obj[n] = valueArr[0]
    }
    if (valueArr.length > 1) {
      obj[n] = valueArr
    }
  })
  myJSON = JSON.stringify(obj, null, 2)
  return myJSON
}

module.exports = form2json
