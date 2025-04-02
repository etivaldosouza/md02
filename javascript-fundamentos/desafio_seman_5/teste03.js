// Crie uma função que receba uma palavra e retorne a quantidade de vogais nela.


function contarVogais(palavras) {

    
    var vogais = "aeiouAEIOU"
    var mostrarVogais = []
    total = 0
    for(var letra of palavras ){

        if(vogais.includes(letra)){
            total++
            mostrarVogais.push(letra)                    
        }
    }
    return `${total} (${mostrarVogais})`
}
var msg = 'IncodeTechSchool'
var cont = contarVogais(msg)
console.log(cont)   

