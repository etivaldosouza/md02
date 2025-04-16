//============/ / metodo .unshift() / /=====================

// quando quero adicionar elemento no inicio do array

const numeros = [5,3,12,17,10,99]

const adiciona = numeros.unshift(0,1,2)
console.log(adiciona)

console.log(JSON.stringify(numeros)) // o comando faz com que o resultado fique em apenas uma linha sem quebra
