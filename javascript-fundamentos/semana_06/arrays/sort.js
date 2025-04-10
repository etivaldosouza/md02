// metodo sort() coloca o array em ordem

let numeros = [2,9,5,0,8]
numeros.sort() // ordem crescente com apenas um digito
console.log(numeros)


// ordem descrescente:

let numeros = [2,9,5,0,8]
numeros.sort((a,b) => b-a)
console.log(numeros)

// com dois digitos:

let numeros = [10,6,8,19,18,20]
numeros.sort((a, b) => a-b) // crescente
console.log(numeros)

numeros.sort((a,b) => b-a) // decrescente
console.log(numeros)