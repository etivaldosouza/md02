// function sao usadas para reaproveitar o codigo durante o programa sem precisar repetir o codigo

function escreva() {
    console.log('olá, programador a bordo!')
}

// para poder disparar a funcao tem q realizar a chamada p/ funcao:

escreva() 
escreva()
escreva()

// criando funcao passando parâmetro para customizar a função: 

function escrevaMensagem(mensagem){
    console.log(mensagem)
    
}

escrevaMensagem('olá,Mundo!') // (olá mundo! é o parametro da função)
escrevaMensagem('Ayrton Teshima') // 
escrevaMensagem('Bom dia!')


// funcoes que retornam valores ( elas ñ imprimem os valores apenas retornam)

function somar(a,b){
    return a+b
}

var s = somar(6,4)
console.log(s) 
// ou:
console.log(somar(6,4))

// posso passar qualquer tipo de valor como parametro de funcao(seja numeros,str,objetos,array etc)

// passando array como parametro da funcao

function somarTudo(numeros) {
    
    var total = 0 // acumulador

    for(var num of numeros){       
        total = total + num     
    }  
    return total    
}

var ArrayNumeros = [3,5,7,10,9,12,5,10]
var resultado = somarTudo(ArrayNumeros) // (ArrayNumeros) vai ser o parametro utilizado
console.log(resultado)
//na function acima
