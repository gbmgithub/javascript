tamanho = 10;
quadro = "";
for (y = 0; y < tamanho; y++) {
    for (x = 0; x < tamanho; x++) {
        if ((x + y) % 2 == 0) {
            quadro += " ";
        } else {
          quadro += "#";
        }
      }
      quadro += "\n";
    }
console.log(quadro);
