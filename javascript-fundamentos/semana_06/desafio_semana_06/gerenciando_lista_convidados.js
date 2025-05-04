// 1) crie um novo array apenas com os três primeiros convidados, sem modificar o array original.

// 2) Infelizmente, carlos e daniela ñ poderão comparecer. remova-os da lista e adicione gabriel e helena.

let convidados = ['Alice','Bruno','Carlos','Daniela','Eduardo','Fernanda']

const novoArray = convidados.slice(0,3)

console.log(novoArray)

convidados.splice(2,2,'Gabriel','Helena')
console.log(convidados)

