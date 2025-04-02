// Crie uma função que receba uma palavra e retorne a quantidade de vogais nela.
// Exemplo de Saída Esperada:
// contaVogais("javascript") // Deve retornar 3 (a, i, a)


function contarVogais(v){
    total = 0 
    let vog = 'aeiou'   
    for(var vogais of v){
        if(vogais.includes('vog') == true){
            total++
        }
    }
    return total
}

var palavra = 'javascript'
var resultado = contarVogais(palavra)
console.log(resultado)


//==================//==================


function contarVogais(palavra){
    var vogais = 'AEIOU'.toLocaleLowerCase()
    var vogaisEncontradas = []
    total = 0
    
    for(var letra of palavra){    
        if(vogais.includes(letra) && !vogaisEncontradas.includes(letra)) {
            total++
            vogaisEncontradas.push(letra)
            
        }           
    }
    return `${total} (${vogaisEncontradas.join(', ')})`;
    
}

// funcao para letra:



var res = contarVogais('javascript')
console.log(`a palavra contem ${res} vogais`)
