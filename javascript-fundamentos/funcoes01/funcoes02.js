// variaveis como função:


var subtraiDoisNumeros = function subtrai(a,b){
    return a - b
}

console.log(subtraiDoisNumeros(10,3))

/*
 obs: se a variavel recebe uma função ela é uma função. 
logo se eu chamar a função subtrai irá da erro.
console.log(subtrai)==> vai dá erro. eu tenho que chamar a variavel que é uma função. console.log(subtraiDoisNumeros)
logo o nome da função "subtrai" fica dispensavel. e quando ñ colocamos o nome na função chamamos ela de anonima.
*/

// função anonima: ( função sem o nome)


var subtraiTresNumeros = function (a,b,c){
    return a - b - c
}

console.log(subtraiTresNumeros(10,3,2))

/*

ao armazenar uma função em uma variável eu posso ñ colocar o nome dela tornando ela anônima.