// utilizando o new Set(x) para eliminar elementos repetidos e o sort() para deixar em ordem.

const nomes = ['maria', 'joana', 'maria', 'neto', 'pedro', 'joana', 'carlos']

const nomeUnico =  [...new Set(nomes.sort())]

console.log(nomeUnico)