// o map permite criar um novo array utilizando informações de um array ja existente.

const produtos = [
    
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome:'amaciante', valor: 6.50, categoria:'limpeza'},
    {id: 3, nome:'pão', valor: 2.00, categoria:'alimento'},
    {id: 4, nome:'queijo', valor: 7.00, categoria:'alimento'},
    {id: 5, nome:'leite', valor: 2.20, categoria:'alimento'}
]

// criando array de indice:

novoArray = produtos.map(function(ident){ // ident é função que vai retornar cada elemento do array produto
    return ident.id
})

console.log(novoArray)

//===========/ /===============

// c/ arrow function:

const produtos = [
    
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome:'amaciante', valor: 6.50, categoria:'limpeza'},
    {id: 3, nome:'pão', valor: 2.00, categoria:'alimento'},
    {id: 4, nome:'queijo', valor: 7.00, categoria:'alimento'},
    {id: 5, nome:'leite', valor: 2.20, categoria:'alimento'}
]

 novoArray = produtos.map(ident => ident.id)
 console.log(novoArray)

 console.log(produtos.map(ident => ident.id)) // mais simplificada

//=========/ /================/ /===============

 // retornando os nomes:

 const produtos = [
    
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome:'amaciante', valor: 6.50, categoria:'limpeza'},
    {id: 3, nome:'pão', valor: 2.00, categoria:'alimento'},
    {id: 4, nome:'queijo', valor: 7.00, categoria:'alimento'},
    {id: 5, nome:'leite', valor: 2.20, categoria:'alimento'}
]

const nomes = produtos.map(function(produto){
    return produto.nome
})

console.log(nomes)

//========/ /=============/ /==========

// com arrowfunction:

const produtos = [
    
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome:'amaciante', valor: 6.50, categoria:'limpeza'},
    {id: 3, nome:'pão', valor: 2.00, categoria:'alimento'},
    {id: 4, nome:'queijo', valor: 7.00, categoria:'alimento'},
    {id: 5, nome:'leite', valor: 2.20, categoria:'alimento'}
]

const nomes = produtos.map(produto => produto.nome)
console.log(nomes)

console.log(produtos.map(produto => produto.nome)) // forma mais simplificada