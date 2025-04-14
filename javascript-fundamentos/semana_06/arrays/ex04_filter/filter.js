//filter : criar um novo array mas filtrando fora alguns desses itens. os elementos que vão para o novo array, vao fazer parte desse array respeitando um parametro passado por mim.

const produtos = [
    
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome:'amaciante', valor: 6.50, categoria:'limpeza'},
    {id: 3, nome:'pão', valor: 2.00, categoria:'alimento'},
    {id: 4, nome:'queijo', valor: 7.00, categoria:'alimento'},
    {id: 5, nome:'leite', valor: 2.20, categoria:'alimento'}
]

// combinando map e filter. criando um array de produtos de categoria alimento e com o nome dos produtos

const alimentos = produtos.filter(p => p.categoria === 'alimento').map(p => p.nome)

console.log(alimentos)

// ou :

const produtos = [
    
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome:'amaciante', valor: 6.50, categoria:'limpeza'},
    {id: 3, nome:'pão', valor: 2.00, categoria:'alimento'},
    {id: 4, nome:'queijo', valor: 7.00, categoria:'alimento'},
    {id: 5, nome:'leite', valor: 2.20, categoria:'alimento'}
]

console.log(produtos.filter(p => p.categoria === 'alimento').map(p => p.nome)) 