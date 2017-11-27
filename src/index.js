module.exports = function getPositiveKeysOfBoolset(boolset) {
  let result = []
  for(let i = 0, key, val; i < boolset.length; i += 2) {
      key = boolset[i]
      val = boolset[i + 1]
      if(val) {
          result.push(key)
      }
  }
  return result
}