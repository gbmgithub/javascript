for (let num = 1; num <= 100; num++) {
    let disp = ""; //valor vazio, logo opcao 'e por falso na saida
    if (num % 3 == 0) disp += "Fizz";
    if (num % 5 == 0) disp += "Buzz";
    else if (num % 3 == 0) if (num % 5 == 0) disp += "FizzBuzz"
    console.log(disp || num);
  }