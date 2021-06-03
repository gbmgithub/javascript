var x = [1, 2, 3];
function reverse(a) {
    var b = [], conta = 0;
    for (var i = a.length-1; i >= 0; i -= 1) {
        b[conta] = a[i];
        conta += 1;
    }
    return b;
}
console.log(reverse(x));