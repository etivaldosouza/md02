// manipular um array de estoque simulando entrada e saida de produtos:

// 1) um novo produto 'headset' chegou ao estoque. adicione ao final da lista

// 2) o primeiro item foi vendido e deve ser removido 

// 3) o monitor apresentou problema e precisa ser substituido por monitor gamer

// saida esperada:  let estoque = [mouse,monitor gamer, gabinete, headset]

let estoque = ['teclado','mouse','monitor','gabinete']

estoque.push('headset') // adicionando elemento no final do array
estoque.shift() // removendo o primeiro item do array
estoque.splice(1,1,'monitor gamer') // removendo o item da posição 1, apenas ele, e adicionando o item monitor gamer

console.log(estoque)


// posição de cada elemento do array

let estoque = ['teclado','mouse','monitor','gabinete']

const posicao = estoque.forEach(function(item, indice) {
    console.log(`o item ${item} está na posição ${indice}`)
});

