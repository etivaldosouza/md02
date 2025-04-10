/*
    function normal
*/
var soma = function(a,b) {
    return a+b
}

console.log(soma(10,4))

//=====//==========//=========
/*
   sintaxe da arrow Function:
*/

var soma = (a,b) => {
    return a+b
}

console.log(soma(10,5))

// quando temos uma função apenas com um retorno imediato, sem nenhuma logica dentro do bloco, apenas um retorno imediado, podemos simplificar mais ainda:

var soma = (a,b) => a+b 

console.log(soma(10,5))

// maneira opcional usando o parenteses p/ proteger o bloco
 
var soma = (a,b) =>(
    a+b
 )

 console.log(soma(10,5))

 // caso a function retorne um objeto o parenteses é obrigatorio para ñ conflitar com as chaves da function

 var usuario = () => (
    {
        nome: 'Etivaldo',
        idade: 42
    }
 )

 console.log(usuario())

//=========//============//=================//

 var usuario = () => ({nome: 'Etivaldo', idade: 42})

 console.log(usuario())

 //=============//==============//===========//

 var usuario = (cidade) => (  // c/ apenas um parametro posso omitir o parenteses de cidade
    {
        nome: 'Ayrton',
        idade: 26,
        cidade        
    }
 )

 console.log(usuario('Recife'))

 // na arrow function ñ é possivel alterar o this dentro dela