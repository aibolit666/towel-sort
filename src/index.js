
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
      return []
    }
    let res = []
    for (let element = 0;element<matrix.length;element++) {
      if (element % 2 == 0) {
         res.push(matrix[element])
       } else {
         res.push(matrix[element].reverse())
       }
    }
    let result = []
    for (i=0;i<res.length;i++) {
      result = result.concat(res[i])
    }
    return result
}