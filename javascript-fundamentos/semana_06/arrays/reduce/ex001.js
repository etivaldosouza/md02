// com o reduce podemos gerar um único valor atraves de uma coleção(lista ou array). por exemplo, quando temos um array de numeros e queremos somar todos os valores desse array e obter um valor total.

// no reduce temos dois parâmetros um é a função de callback(que vai receber dois parametros: um é o valor acumulado,que na primeira iteração esse valor é o valor inicial, e o outro é o item do array) e o outro é o valor inicial.

// o valor inicial vai servir para começar por ele o calculo da função. esse valor pode ser um nr, uma str, um objeto, depende com que vc esta trabalhando.

// calculando o valor todal de um array:

const numeros = [1,2,3,4]

const total = numeros.reduce(function(valorAcumulador,valorArray){
    return valorAcumulador + valorArray
},0) // o 0 é o valor inicial(começa a contar por ele)

console.log(total)

//========/ / utilizando ArrowFunction / /==============/ /===================

const numeros = [1,2,3,4]

 console.log(numeros.reduce((acumulador,valorArray) => acumulador + valorArray,0))



//===========/ /==============/ /===========/ /====================


const produtos = [
    
    {id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    {id: 2, nome:'amaciante', valor: 6.50, categoria:'limpeza'},
    {id: 3, nome:'pão', valor: 2.00, categoria:'alimento'},
    {id: 4, nome:'queijo', valor: 7.00, categoria:'alimento'},
    {id: 5, nome:'leite', valor: 2.20, categoria:'alimento'}
] 

const total = produtos.reduce((valorAcumulador,produto) => valorAcumulador + produto.valor,0)

console.log(total)