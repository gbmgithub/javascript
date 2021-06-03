var numArr = [1, 2, 3];
var sumArr = 0;
function somatorio () {
    for (var i = 0; i < numArr.length; i++) {
        sumArr += numArr[i]
    }
}
somatorio();
console.log("Your sum is " + sumArr + ".");
