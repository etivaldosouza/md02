// tenho um array de objetos e quero retornar um objeto que tenha as pessoas de maiores e menores idades.


const pessoas = [
    {
        nome:'Ayrton',
        idade: 27
    },

    {
        nome:'João',
        idade: 14
    },

    {
        nome:'Maria',
        idade: 23
    },

    {
        nome:'Joana',
        idade: 21
    },

    {
        nome:'Lucas',
        idade: 32
    },

    {
        nome:'Mateus',
        idade: 15
    },

    {
        nome:'Isa',
        idade: 23
    },

    {
        nome:'Luiza',
        idade: 17
    },
]

const maiorMenor = pessoas.reduce(function(valorAcumulador,valorArray){
    const maiorMenorIdade = valorArray.idade >= 18 ? 'maiores' : 'menores'
    valorAcumulador[maiorMenorIdade].push(valorArray)
    return valorAcumulador
}, {maiores:[], menores: []})

console.log(maiorMenor)


