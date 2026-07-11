const _ = require("lodash");

const diff = _.difference([2, 3, 4, 5, 6, 7], [4, 5, 6, 8, 9]);
console.log(diff);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = _.concat(arr1, arr2);
console.log(arr3);
