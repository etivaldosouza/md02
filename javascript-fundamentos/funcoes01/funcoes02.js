// variaveis como função:

var subtraiDoisNumeros = function subtrai (a,b){
    return a-b
}
var res = subtraiDoisNumeros(10,3)
console.log(res)

/*
 obs: se a variavel recebe uma função ela é uma função. 
logo se eu chamar a função subtrai, irá dá erro.
console.log(subtrai)==> vai dá erro. eu tenho que chamar a variavel que é uma função. console.log(subtraiDoisNumeros)
logo o nome da função "subtrai" fica dispensavel. e quando ñ colocamos o nome na função chamamos ela de anonima.
*/

// função anonima: ( função sem o nome)


var subtraiTresNumeros = function (a,b,c){
    return a - b - c
}

console.log(subtraiTresNumeros(15,3,2))

/*

ao armazenar uma função em uma variável ou nas funcoes autoexecutaveis eu posso ñ colocar o nome dela tornando ela anônima.