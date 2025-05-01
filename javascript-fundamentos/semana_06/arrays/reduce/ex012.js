/*

    Exercício 1 
    Indexar por nome:
    Transforme o array em um objeto onde cada nome seja uma chave e o valor seja o objeto da pessoa.

*/

const pessoas = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Bruno' },
    { id: 3, nome: 'Clara' }
  ];
  
const objeto = pessoas.reduce(function(acumulador,pessoa){
    acumulador[pessoa.nome] = pessoa
    return acumulador
},{})

console.log(objeto)