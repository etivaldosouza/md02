// Crie uma função que receba uma palavra e retorne a quantidade de vogais nela.
// Exemplo de Saída Esperada:
// contaVogais("javascript") // Deve retornar 3 (a, i, a)


function contarVogais(palavra) {

    var vogais = 'AEIOU'.toLocaleLowerCase()
    var vogaisEncontradas = []
    total = 0
    
    for(var letra of palavra){    
        if(vogais.includes(letra)) {
            total++
            vogaisEncontradas.push(letra)
            
        }           
    }
    return `a palavra contém ${total} vogais (${vogaisEncontradas})`
    
}

console.log(contarVogais('javascript'))
