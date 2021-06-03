document.getElementById("button01").addEventListener("click", addText);

function addTexto() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.getElementById("field01").value);
    node.appendChild(textnode);
    document.getElementById("list01").appendChild(node);
}
