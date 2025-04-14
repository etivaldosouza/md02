//Imagine que você tem uma loja online e quer aplicar um desconto de 10% em todos os preços dos produtos.
//Você tem um array com os preços originais dos produtos, e precisa usar o método map() para criar um novo array com os preços com desconto aplicado.


let precos = [100, 200, 300, 400, 500]

arrayDesconto = precos.map(function(valor){
   return valor - (10/100 * valor)
})

console.log(arrayDesconto)


