// funcao autoinvocalvel: cria a função que já autoincova ou seja cria a funcao ja chamando ela.


(function autoExecuta(){
    console.log('executei')
}())

// autoexecutavel com parametro:

(function autoexec(nome){
    console.log('executei,',nome)
}('etivaldo'))

// essas funções são usadas para proteger variaveis, funcoes e nem misturar o nosso codigo com codigo de uma biblioteca por exemplo.
// para nao da conflito com outras funções que possivelmente possa ter o mesmo nome da nossa função

//no caso das funcoes autoinvocaveis o nome da função é dispensavel.