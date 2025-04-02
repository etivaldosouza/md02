/*  

Escreva uma função que receba um array de números e retorne a soma apenas dos números pares.

*/


function somar_pares(numeros){
    total = 0
    for(var num of numeros){
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
