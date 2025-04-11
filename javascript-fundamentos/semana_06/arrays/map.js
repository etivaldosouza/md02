//metodo maps: utilizado para manipular um array e retornar um resultado de um novo array com o valor do primeiro array modificado.

// o map ele usa uma funcao de calback como parametro e essa funcao  vai manipular  cada valor desse array entao esse map iterar esse valor desse array um a um e ele vai aplicar em cada valor a funcao que a gente vai passar.

// alterando um array de numeros e criando um novo array formado  pelo array antigo * 2 

// utilizando o loop for normal: 

const numeros = [2,3,6,5,10]
let novoArray = []
for(let c = 0; c < numeros.length;c++) {
    novoArray.push(numeros[c] *2 )
}

console.log(numeros)
console.log(novoArray)

//============/ /================/ /===================

// utilizando o metodo MAP: ñ precisa ficar cirando variavel fora do escopo para alterar depois como ocorreu no caso acima. tive que criar uma variavel com um arrayNovo fora do for.

// o map é um metodo de array. é uma function que espera que vc passe uma funcao de callback p/ ela. essa calback é p/ manipular cada valor desse array. entao esse map vai iterar os valores desse array um a um  aplicando a função que vc passar.

const numeros = [2,3,6,5,10]

numeros.map(function(numero){ // função map recep uma função de callback que percorre cada elemento do array
    console.log(numero)
})

//==========/ /================/ /============/ /==========
// criar um array novo com o dobro dos elemento do array antigo

const numeros = [2,3,6,5,10]

const novoArray = numeros.map(function(numero){
    return numero * 2
})

console.log(numeros) // imprime array antigo
console.log(novoArray) // imprime  array nobo

//=========/ /===============/ /======================/ /=====
// usando arrow function(maneira simplificada)

const numeros = [2,3,6,5,10]

const novoArray = numeros.map(numero => numero * 2)
console.log(novoArray)






