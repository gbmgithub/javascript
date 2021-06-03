document.getElementById("bot1").addEventListener("click", addTexto);

function addTexto() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.getElementById("campo01").value);
    node.appendChild(textnode);
    document.getElementById("lista1").appendChild(node);
}