// Crie uma função que receba uma palavra e retorne a quantidade de vogais nela.
// Exemplo de Saída Esperada:
// contaVogais("javascript") // Deve retornar 3 (a, i, a)


function contarVogais(v){
    total = 0    
    for(var vogais of v){
        if(vogais.includes('aeiou') == true){
            total++
        }
    }
    return total
}

var palavra = 'javascript'
var resultado = contarVogais(palavra)
console.log(resultado)


