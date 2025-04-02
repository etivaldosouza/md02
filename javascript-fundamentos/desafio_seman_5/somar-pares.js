/*  

Escreva uma função que receba um array de números e retorne a soma apenas dos números pares.

*/

// o parametro for of percorre todo o arrayNumeros e armazena cada valor dela na variavel criada num.

function somar_pares(numeros){
    total = 0
    for(var num of numeros){ // var num criada por mim e o parametro numeros refere-se aos valores de arrayNumeros
        if(num % 2 != 0){ // numero impar
            continue      // ñ vai seguir p/ o prox comando.   
        }else{
            total = total + num
        }
    }
    return total
}

var arrayNumeros = [1, 2, 3, 4, 5, 6,]
var soma = somar_pares(arrayNumeros)
console.log(soma)
