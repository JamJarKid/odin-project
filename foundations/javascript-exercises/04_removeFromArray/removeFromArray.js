const removeFromArray = function (array, ...nums) {
  for (let num of nums) {
    while (array.indexOf(num) > -1) {
      array.splice(array.indexOf(num), 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
