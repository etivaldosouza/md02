
/*
    pesquisando num array de objetos pessoas com sobrenome souza.foi preciso utilizar metodo filter e map p/ retornar um array apenas com a propriedade de nome

*/

const pessoas = [
    {
        nome: 'carlos',
        sobrenome: 'souza'
    },

    {          
        nome: 'karine',
        sobrenome:'torres'
    },

    {
        nome:'ayrton', 
        sobrenome:'souza'
    },

    {
        nome: 'ana',
        sobrenome: 'souza'
    }

]

const souzas = pessoas.filter(function(pessoa){
    return pessoa.sobrenome === 'souza'
}).map(sobre => sobre.nome)

console.log(souzas)