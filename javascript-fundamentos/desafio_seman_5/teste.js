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
