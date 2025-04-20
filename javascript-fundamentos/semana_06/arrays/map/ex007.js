/*
    o map() é utilizado p/ quando for preciso alterar valores de um array para outro conjunto de array utilizando uma function p/ isso.
    
    a função map ñ altera o valor original. ela é atribuida a uma outra variavel

    o map vai percorrer por cada elemento de um array e atraves de uma function alterar o valor do array e passando para uma nova variavel que formará um novo array com os elementos alterados
*/

// criand um array com o dobro do array original:

const numeros = [1,4,5,9,14,23]

const dobro = numeros.map(function(numero){
    return numero * 2
})

console.log(numeros) // o array original ñ é alterado
console.log(dobro)

//==============/  arrowfunction  /===============//

const numeros = [1,4,5,9,14,23]

const dobro = numeros.map(numero => numero*2)
console.log(dobro)

console.log(numeros.map(numero => numero * 2)) // forma simplificada de fazer

//=====================/ outra forma /==================//

const numeros = [1,4,5,9,14,23]

function dobro(numero){
    return numero * 2
}

const dobrado = numeros.map(dobro)
console.log(dobrado)