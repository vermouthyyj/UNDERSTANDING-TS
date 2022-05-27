function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine('Max', 'Anna');
console.log(combineNames);
addAndHandle(10, 20, function (result) {
    console.log(result);
});
