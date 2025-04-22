// o metodo find() usado p/ quando for preciso procurar ou verificar por um valor dentro de um array ou objeto, sendo que esse retorno vai ser do primeiro elemento que satisfazer esse teste.

//propucrando por uma pizza que comece pela letra 'm': (vai retornar sempre o 1º que tiver com a letra m, ou seja no find() retorna apenas um unico elemento.)

const pizza = [

    'mussarela',
    'calabreza',
    'portuguesa',
    'marguerita'

]

// charAt() usado p/ quando quero pegar um caractere especifico. 

const pizzaM = pizza.find(function(nome){
    return nome.charAt(0) === 'm' 
})

console.log(pizzaM)

// utilizando o metodo startWith('m'): que comece com m

const pizza = [

    'mussarela',
    'calabreza',
    'portuguesa',
    'marguerita'

]

const pizzaM = pizza.find(nome => nome.startsWith('m'))

console.log(pizzaM)


//======================================================//

// pesquisando todos que comecem com a letra 'm':


const pizza = [

    'mussarela',
    'calabreza',
    'portuguesa',
    'marguerita'

]

const pizzaM = pizza.filter(nome => nome.charAt(0) === 'm')

console.log(pizzaM)

//===========================================================//

