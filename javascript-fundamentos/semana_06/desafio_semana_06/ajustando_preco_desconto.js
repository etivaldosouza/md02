/*
    encontrar todos os produtos que custam mais de R$ 1.600.
*/

const produtos = [
    {
        nome: 'Notebook',
        preco: 3000

    },

    {
        nome: 'Smartphone',
        preco: 2000

    },

    {
        nome: 'Tablet',
        preco: 1500

    },

    {
        nome: 'Fone de Ouvido',
        preco: 1800

    },

    {
        nome: 'Caneta',
        preco: 8000

    },
]

const prodCaros = produtos.filter(produto => produto.preco > 1600)

console.log(prodCaros);


