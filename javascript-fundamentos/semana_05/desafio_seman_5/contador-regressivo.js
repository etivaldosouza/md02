/*

Crie uma função que receba um número e faça uma contagem regressiva até 0, imprimindo cada número no console.

contadorRegressivo(5)
// Saída esperada:
// 5
// 4
// 3
// 2
// 1
// 0

*/

var c = 5
while(c >= 0 ){
    console.log(c)
    c--
}

for(var c = 5; c >= 0; c--){
    console.log(c,end='')
}
var num = [5,4,3,2,1,0]
for(var c in num){
    console.log(`${c} -> ${num[c]}`)
}

