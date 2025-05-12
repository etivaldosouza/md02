// calcule o total de faturamento de uma loja

const vendas = [
    {Produtos: 'Notebook', valor: 3000 },
    {Produtos: 'Smartphone', valor: 2000 },
    {Produtos: 'Tablet', valor: 1500 }
]

const faturamento = vendas.reduce(function(acc,valorAtual){
    return acc + valorAtual.valor
},0)

console.log(faturamento)