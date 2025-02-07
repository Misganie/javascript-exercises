const removeFromArray = function(array, ...element) {
    return array.filter(item => !element.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 3, 4, 5, 6], 4, 5));
// 