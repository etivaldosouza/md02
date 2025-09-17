// metodo pop = remove o ultimo elemento do array e retorna o ultimo elemento removido.

const numeros = [10,6,8,19,18,20]
const removed = numeros.pop()
console.log(removed)
console.log(numeros)


//======================================//


let nomes = ["Etivaldo","Pedro","Gustavo"]

let nomeRemovido = nomes.pop()  // remove o ultimo elemento

let arrayNovo = [] // criei um array vazio

arrayNovo.push(nomeRemovido) // adicionando o elemento removido dentro de arrayNovo

console.log(arrayNovo) 