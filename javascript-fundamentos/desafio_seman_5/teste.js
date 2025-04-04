function encontrarVogais(palavra) {
    const vogais = 'aeiouAEIOU'; // Vogais em minúsculas e maiúsculas
    let vogaisEncontradas = [];

    for (let letra of palavra) {
        if (vogais.includes(letra) && !vogaisEncontradas.includes(letra.toLowerCase())) {
            vogaisEncontradas.push(letra.toLowerCase());
        }
    }

    return vogaisEncontradas;
}

// Exemplo de uso
const resultado = encontrarVogais("Luzia");
console.log(`Vogais encontradas: ${resultado.join(', ')}`);


//=============///

let valores = [8,1,7,4,2,9]
valores.sort()
console.log(valores)
for(let c = 0; c < valores.length; c++){ // codigo tradicional p/ percurso em vetor
    console.log(`na posição ${c} está o valor ${valores[c]}`)
}

//=====
let valores = [8,1,7,4,2,9]
valores.sort()

for(let c in valores){ //maneira simplificadsa de percorrer um vetor(só funciona p/ array e objetos)
    console.log(`na posição ${c} está o valor ${valores[c]}`)
}


