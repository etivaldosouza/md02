/*

valores defaut(valores padrão):
-------------------------------

    posso colocar valores defaut(padrão) para os parametros, ou seja,
    eu posso criar uma função que vai receber parametros mas se na hora de invocar essa função se eu nao passar os valores o parametro assume o valor padrão.

*/

function escrevaNome(nome = 'etivaldo',idade = 42){
    console.log(nome)
    console.log(idade)
}

escrevaNome()


//===============//===================================//

// caso tenha informado os parametros vai valer os parametros que foi informado.

function escrevaNome(nome = 'ayrton', idade){
    console.log(nome)
    console.log(idade)
}

escrevaNome('etivaldo',50)