function convert(obj) {
  for (let key in obj) {
    if (obj.hasOwnPorperty(key)) {
      let value = obj[key]
      obj.defineProperty(obj, key, {
        get() {
          console.log('get!')
          return value
        }
        set(target) {
          console.log('set!')
          value = target
          return true
        }
      })
    }
  }
}