// crie um novo array onde todos os produtos tenham um desconto de 10% aplicado.


const produtos = [
    {
        nome: 'notebook',
        preco: 3000
    },

    {
        nome: 'Smartphone',
        preco: 2000
    },

    {
        nome: 'tablet',
        preco: 1500
    }
]

const pDesc = produtos.map(function(item){
    return {
        nome: item.nome,
        preco: (item.preco * 0.9).toFixed(2) // arredondar p/ duas casas decimais
    }
        
})

console.log(pDesc) 


