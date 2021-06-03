var numeroArr = [1, 2, 3];
var somaArr = 0;
function somatorio () {
    for (var i = 0; i < numeroArr.length; i++) {
        somaArr += numeroArr[i]
    }
}
somatorio();
console.log("A sua soma deu " + somaArr + ".");