var numArr = [1, 2, 3];
var sumArr = 0;
function sumOfArray () {
    for (var i = 0; i < numArr.length; i++) {
        sumArr += numArr[i]
    }
}
sumOfArray();
console.log("Your sum is " + sumArr + ".");
