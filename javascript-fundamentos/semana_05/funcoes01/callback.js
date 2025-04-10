// função calback: são funções que são usadas como parametro de outra função e executadas dentro dela.usada para quando vc quer alterar o valor final.


function somaTudo(a,b,fnCallback) {
    return fnCallback(a+b)
}

console.log(somaTudo(10,3,function(total){
    return total * 2
}))


//========// segunda maneira: //==========//

function somaCallback(a,b,fnCallback) { // 1º
    return fnCallback(a+b)
}

var multiplica = function(total){  //2.1º
    return total*2
}

console.log(somaCallback(10,3,multiplica))  //2.0, 3º

/* 
    2ºconsole.log(somaCallback(10,3)
    4º console.log(somaCallback(10,3,multiplica))
*/

function subtrai(a,b,fnCallback){
    return fnCallback(a-b)
}


console.log(subtrai(20,6,function(total){
    return total*2
}))

console.log(subtrai(20,6,function(total){
    return total / 2
}))

console.log(subtrai(20,6,function(total){
    return total + 5  
}))


//=======//==========//=============


function subtrai(a,b,fnCallback){
    return fnCallback(a-b)
}

var multiplica = function(resultado){
    return resultado * 2
}

console.log(subtrai(20,6,multiplica))

//==========//=============//=============


function soma(a,b,fnCallback){
    return fnCallback(a+b)
}

var divide = function(total){
    return total / 2
}

console.log(soma(10,5, divide))