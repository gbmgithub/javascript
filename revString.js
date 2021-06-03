var x = [1, 2, 3];
function revString(a) {
    var b = [], count = 0;
    for (var i = a.length-1; i >= 0; i -= 1) {
        b[count] = a[i];
        count += 1;
    }
    return b;
}
console.log(revString(x));
