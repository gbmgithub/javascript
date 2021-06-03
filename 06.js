var s = "aula de web1";
var posicao = 0;
function procLetras(fra, letrs) {
    function sizeOf (fra) {
        var conta2 = 0;
        for (i=0; i < fra.length; i++){
            conta2++;
        }
    return conta2;//chama sizeOf e retorna conta2
    }
    function sizeOf (letrs) {
        var conta3 = 0;
        for (i=0; i < letrs.length; i++){
            conta3++;
        }
    return conta3;//chama sizeOf e retorna conta3
    }
    if (sizeOf(letrs) > sizeOf(fra)) {
        console.log("Sua substring é maior que a string.");
    }
    else {
        for (i=0; i<letrs.length-fra.length; i++) {
            var conta1 = 0;
            for (j=0; j<letrs.lenght; j++) {
                if (fra[j+i] === letrs[j]) {
                    conta1 = conta1+1;
                    j=0;
                    return i;
                }
                if (conta1 === letrs.length) {
                    var posicao = i;
                }
                else {
                    var posicao = -1;
                }
            return posicao;
            }
        }
    }
}
console.log(procLetras(s, "web1"));
console.log(procLetras(s, "web2"));