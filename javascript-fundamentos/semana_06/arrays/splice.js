// metodo splice: altera conteudo de uma lista, adicionando novos elementos enquanto remove elementos antigos podendo receber dois ou mais argumentos na chamada da função


// .slice(a1,a2, a3,...) onde:

// a1 => indice que a partir dele vai ser removidodo
// a2 => quantidade de elementos que vou remover a contar do primeiro argumento
// a3 em diante => elementos que vou adicionar

const nomes = ['Elian','Carlos','João','Sabrina']
nomes.splice(2,1,'Matheus')
console.log(nomes)

// caso queria retornar o valor que foi removido só jogar o metodo p/ dentro de uma variavel

const linguagens = ['JavaScript','PHP','Go','Python']
const removed = linguagens.splice(2,2,'HTML','CSS') // removo o elemento a partir do indice 2 no total de 2elementos.
console.log(removed) // retorna os removidos
console.log(linguagens)



const linguagens = ['JavaScript','PHP','Go','Python']
const remove = linguagens.splice(0,3)

console.log(linguagens)
console.log(remove)