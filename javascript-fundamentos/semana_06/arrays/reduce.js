// reduce assim como map e filter também itera sobre array a diferença que ele ñ retorna apenas um array ele pode retornar um array ou uma str ou um objeto ou um numero etc.


//iterando sobre um array para gerar um numero que é a soma dos numeros desse array

utilizando o for of:

const numeros = [2,3,6,5,10]

soma = 0

for(let c of numeros){
    soma = soma + c
}

console.log(soma)

// utilizando o reduce: 

// o reduce recebe dois parametros: 
// um é uma function e o segundo parametro é o valor que quero receber, como no caso aqui eu quero receber um numero que é o resultado da soma dos nrs do array então vai começãr com o 0(corresponde ao let soma = 0)

//o primeiro parametro que é uma function de callback recebe dois parametros:
// o primeiro é o valor atual(valor acumulador que no caso começa com o 0)
//o segundo é de fato o valor que to iterando do array

const numeros = [2,3,6,5,10]

const somaReduce = numeros.reduce(function(valorAcumulador,valorArray) {
    return valorAcumulador + valorArray
}, 0)

console.log(somaReduce)

// exemplo com reduce  onde vamos pegar um array de objetos e retornar um objeto onde vai ter uma chave com as pessoas que sao maiores  de idades dentro de um array e outra chave apenas com pessoas menores de idade dentro de um array.




const pessoas = [
    {
        nome:'Ayrton',
        idade: 27
    },

    {
        nome: 'João',
        idade: 14
    },

    {
        nome: 'Maria',
        idade: 23
    },

    {
        nome:'Joana',
        idade: 21
    },
    {
        nome: 'Lucas',
        idade:32
    },

    {
        nome: 'Mateus',
        idade: 15
    },

    {
        nome: 'Isa',
        idade: 23
    },

    {
        nome: 'Luiza',
        idade: 17
    }
    
]

pessoasAgrupadas = pessoas.reduce(function(valorAcumulador,valorArray) {
    const propMaiorOuMenor  = valorArray.idade >= 18? 'maiores':'menores'
    
    valorAcumulador[propMaiorOuMenor].push(valorArray)
    return valorAcumulador
},{ maiores:[], menores: []})

console.log('pessoasAgrupadas',pessoasAgrupadas)
