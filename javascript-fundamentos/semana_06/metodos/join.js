
/*
    join

=> Retorna a união de todos os elementos de um array em forma de string. 

=> 
    
    Pode-se especificar um caractere separador entre os elementos da string. o separador padrão é a vírgula.

=> metodo .join(uma str usada para separar um elemento do array do próximo)

*/


var numeros = [5,3,12,17,10,99]

console.log(numeros.join('--'))
console.log(numeros.join('   '))
console.log(numeros.join(' -> '))
console.log(numeros.join(','))


//==================================================//


let arr = [6,11,'x', 'y']
let arr1 = arr.join(' ** ')
console.log(arr1)

console.log(typeof(arr1))




let nomes = ['Etivaldo', 'Gustavo', 'Carlos']
console.log(nomes.join('//'))