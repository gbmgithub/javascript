var s = "lorem ipsum";
var position = 0;
function subStringSearch(fra, letrs) {
    function sizeOf (fra) {
        var count2 = 0;
        for (i=0; i < fra.length; i++){
            count2++;
        }
    return count2;//chama sizeOf e retorna conta2
    }
    function sizeOf (letrs) {
        var count3 = 0;
        for (i=0; i < letrs.length; i++){
            count3++;
        }
    return count3;//chama sizeOf e retorna conta3
    }
    if (sizeOf(letrs) > sizeOf(fra)) {
        console.log("Your search is greater than your search field.");
    }
    else {
        for (i=0; i<letrs.length-fra.length; i++) {
            var count1 = 0;
            for (j=0; j<letrs.lenght; j++) {
                if (fra[j+i] === letrs[j]) {
                    count1++;
                    j=0;
                    return i;
                }
                if (count1 === letrs.length) {
                    var position = i;
                }
                else {
                    var position = -1;
                }
            return position;
            }
        }
    }
}
console.log(subStringSearch(s, "lore"));
console.log(subStringSearch(s, "ips"));
