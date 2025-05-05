// a sintaxe é a mesma do map, a diferença para é que na função de callback precisa retornar um valor boleano:
// se for true, siguinifica que vai armazenar o valor no array se for false siguinifica que ñ vai armazenar o valor no array.

// criando um novo array apenas com valores multiplos de 2 a partir de um array informado:

// com for normal:

const numeros = [2,3,6,5,10]

let multiplos = []

for(let c = 0; c < numeros.length;c++){
    if(numeros[c] % 2 === 0){
        multiplos.push(numeros[c])
    }
}

console.log(multiplos)

//=========//===================//

//com for of:

const numeros = [2,3,6,5,10]

let multiplos = []

for(let c of numeros){
    if(c % 2 === 0){
        multiplos.push(c)
    }
}

console.log(multiplos)

//========/ /====================/ /==================

// utilizando o filter:

const numeros = [2,3,6,5,10]

const multiplos = numeros.filter(function(numero){
    return numero % 2 === 0
})

console.log(multiplos)


console.log(numeros.filter(numero => numero % 2 === 0)) // simplificando com arrowfunction:

//=========/ /==============/ /==================/ /===============

// utilizando map e filter juntos: 

// conforme o array dado abaixo, crie um array de numeros pares e em seguida multiplique esses valores gerados por 2 em um novo array


const numeros = [2,3,6,5,10]

const numPar = numeros.filter(function(num){
    return num % 2 === 0
})

const novoArray = numPar.map(function(par){
    return par * 2
})

console.log(numeros)
console.log(numPar)
console.log(novoArray)

//========= Maneira 2: =================/ /==================

const numeros = [2,3,6,5,10]

const arrayMapFilter = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2)

console.log(arrayMapFilter)