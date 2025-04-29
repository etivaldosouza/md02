/* conforme objeto abaixo Separe os produtos em duas categorias:
    
    caros (preço maior ou igual a 1000)
    baratos (preço menor que 1000)
*/


const produtos = [
    { nome: 'Notebook', preco: 2500 },
    { nome: 'Celular', preco: 1800 },
    { nome: 'Fone de Ouvido', preco: 200 },
    { nome: 'Monitor', preco: 900 },
    { nome: 'Teclado', preco: 150 },
    { nome: 'Mouse', preco: 100 },
    { nome: 'Cadeira Gamer', preco: 1200 },
    { nome: 'Impressora', preco: 750 },
]

const caroBarto = produtos.reduce(function(acumalador,produto){
    const maisCaroBarato = produto.preco >= 1000 ? 'caro':'barato' //*
    acumalador[maisCaroBarato].push(produto)
    return acumalador
},{caro:[],barato:[]})

console.log(caroBarto)

// utilizei o operador ternario(    substitui o if/else) p/ descobrir o mais barato e mais caro