//metodo maps: utilizado para manipular um array e retornar um resultado em um novo array com o valor do primeiro array modificado.

// O método map() é uma função dos arrays em JavaScript. Ele é usado quando você quer transformar cada item de um array e criar um novo array com esses novos valores. sempre vai retornar um array

// Pensa assim: você tem uma lista de coisas e quer fazer algo com cada item da lista — tipo multiplicar por 2, transformar em letras maiúsculas, ou pegar só uma parte de cada item.

// o map ele usa uma funcao de calback como parametro e essa funcao  vai manipular  cada valor desse array entao esse map vai iterar esse valor desse array um a um e ele vai aplicar em cada valor a funcao que a gente vai passar.

// alterando um array de numeros e criando um novo array formado  pelo array antigo * 2 

// utilizando o loop for normal: 

const numeros = [2,3,6,5,10]
let novoArray = []
for(let c = 0; c < numeros.length;c++) {
    novoArray.push(numeros[c] * 2)
}

console.log(numeros)
console.log(novoArray)

//============/ /================/ /===================

// utilizando o metodo MAP: ñ precisa ficar cirando variavel fora do escopo para alterar depois como ocorreu no caso acima. tive que criar uma variavel com um arrayNovo fora do for.

// o map é um metodo de array. é uma function que espera que vc passe uma funcao de callback p/ ela. essa calback é p/ manipular cada valor desse array. entao esse map vai iterar os valores desse array um a um  aplicando a função que vc passar.

const numeros = [2,3,6,5,10]

numeros.map(function(numero){ // função map recep uma função de callback onde vai percorre cada elemento do array aplicando a função de callback 
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






