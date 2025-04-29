/*
 conforme objeto abaixo  divida os produtos em três categorias:

    muitoCaros (preço acima de 2000)

    caros (preço entre 1000 e 1999)

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

const categorias = produtos.reduce(function(acumulador,produto){
    const catProd = produto.preco >= 2000 ? 'muitoCaro': produto.preco >=1000 ? 'caro':'barato'
    acumulador[catProd].push(produto)
    return acumulador
},{muitoCaro: [],caro:[],barato:[]})

console.log(categorias)