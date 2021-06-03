var s = "aula de web1";
function contaLetr(fra, letr) {
    var contag = 0;
    for (var i = 0; i < fra.length; i++) {
      if (fra[i] === letr) {
        contag++;
      }
    }
    return contag;
}
console.log(contaLetr(s, 'e'));