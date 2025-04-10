// metodo splice: altera conteudo de uma lista, adicionando novos elementos enquanto remove elementos antigos podendo receber dois ou mais argumentos na chamada da função


// .slice(a1,a2, a3,...) onde:

// a1 => indice do elemento que quero remover
// a2 => quantidade de elementos que vou remover
// a3 em diante => elementos que vou adicionar

const nomes = ['Elian','Carlos','João','Sabrina']
nomes.splice(2,1,'Matheus')
console.log(nomes)

// caso queria retornar o valor que foi removido só jogar o metodo p/ dentro de uma variavel

const linguagens = ['JavaScript','PHP','Go','Python']
const removed = linguagens.splice(2,2) // removo o elemento a partir do indice 2 no total de 2elementos.
console.log(removed) // retorna os removidos
console.log(linguagens)