var s = "lorem ipsum";
function letterCounter(fra, letr) {
    var count = 0;
    for (var i = 0; i < fra.length; i++) {
      if (fra[i] === letr) {
        count++;
      }
    }
    return count;
}
console.log(letterCounter(s, 'e'));
