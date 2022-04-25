let posiblesAngramas: string[] = ["rosca", "arcas", "caras", "casar", 
  "rasca", "jugo", "salvi", "centraron", "arbol", "entroncar", "celebraste", 
  "restablece", "carol", "claro", "colar"];

function verificar(palabra1: string, palabra2: string): boolean {
  let array1 = palabra1.split("").sort().toString();
  let array2 = palabra2.split("").sort().toString();

  if ( array1 == array2 ) {
    return true;
  }

  return false;
}

function duvuelveAngramas(palabraAEvaluar: string, 
                                angramaBuscar: string[]): string[] {
  let anagramaFinal: string[] = [];

  angramaBuscar.forEach(element => {
    if (palabraAEvaluar.length == element.length) {
      if (verificar(palabraAEvaluar, element)) {
        anagramaFinal.push(element);
      }
    }
  });

  return anagramaFinal;
}

console.log("Posibles anagramas");
console.log(posiblesAngramas);
console.log("");

console.log("Anagramas de 'sacar':");
console.log(duvuelveAngramas("sacar", posiblesAngramas));

console.log("");
console.log("Anagramas de 'establecer':");
console.log(duvuelveAngramas("establecer", posiblesAngramas));

console.log("");
console.log("Anagramas de 'encontrar':");
console.log(duvuelveAngramas("encontrar", posiblesAngramas));

console.log("");
console.log("Anagramas de 'calor':");
console.log(duvuelveAngramas("calor", posiblesAngramas));