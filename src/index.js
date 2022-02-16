
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let resArr = [];
    matrix.forEach((arr,index) => {
        index === 0 || index % 2 === 0 ? arr : arr.reverse();
        arr.forEach((item) => {
            resArr.push(item);
        });
       
    })
  return resArr;
}

 