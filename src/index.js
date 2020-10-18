
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix)) return [];
  return matrix
    .map((arr, index) => {
      if ((index + 1) % 2 === 0) {
        arr.reverse();
      }
      return arr;
    })
    .flat();
}
