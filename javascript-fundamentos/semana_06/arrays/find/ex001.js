// o metodo find() usado p/ quando for preciso procurar ou verificar por um valor dentro de um array ou objeto sendo que esse retorno vai ser do primeiro elemento que satisfazer esse teste.

//propucrando por uma pizza que comece pela letra 'm': (vai retornar sempre o 1º que tiver com a letra m)

const pizza = [

    'mussarela',
    'calabreza',
    'portuguesa',
    'marguerita'

]

const pizzaM = pizza.find(function(nome){
    return nome.startsWith('m')
})

console.log(pizzaM)
