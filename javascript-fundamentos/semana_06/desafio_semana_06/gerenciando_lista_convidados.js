// 1) crie um novo array apenas com os três primeiros convidados, sem modificar o array original.(metodo slice())

// 2) Infelizmente, carlos e daniela ñ poderão comparecer. remova-os da lista e adicione gabriel e helena.

let convidados = ['Alice','Bruno','Carlos','Daniela','Eduardo','Fernanda']

const novoArray = convidados.slice(0,3)

console.log(novoArray)

convidados.splice(2,2,'Gabriel','Helena')
console.log(convidados)


/*
    explicação:

    convidados.splice(2,2,'Gabriel','Helena') 
    
    primeior 2: indica o item a ser removido 2. 

    segundo 2: indica a quantidade de itens a ser removidos a contar do primeiro elemento removido.

    gabriel e helena são os que serão incluidos.

*/