// Escreva uma função que receba um array de números e retorne a soma apenas dos números impares.


function somarImpares(numeros) {

    total = 0
    for(var num of numeros){
        if(num % 2 === 0){ // nr par ñ interessa
            continue      // ele ñ vai proseguir para a prox linha. ele volta p/ o loop  
        }else{

            total += num
        }
    }
    return total
}


var arrayNumeros = [1, 2, 3, 4, 5, 6,]
console.log(somarImpares(arrayNumeros))


// relembrando for of e for in
// fo of -> retorna o valor da variavel
// for in -> retorna o indice(chave) da variavel

var numeros = [1, 2, 3, 4, 5, 6,]
for(var num of numeros){
    console.log(num)
}

//=========//======================

var numeros = [1, 2, 3, 4, 5, 6,]
for(var num in numeros){
    console.log(`na posição ${num} encontra-se o valor ${numeros[num]}`) // imrime posição e o elemento 
}

var numeros = [1, 2, 3, 4, 5, 6,]
for(var num in numeros){
    console.log(num) // imprimindo apenas as posiçoes
}