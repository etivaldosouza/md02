// destructure 

var usuario = {
    nome: 'Ayrton',
    idade: '27',
    pais: 'Brasil'
}

var {nome,idade,pais} =  usuario // para puxar o valor das propriedades do objeto usuario
console.log(nome,idade,pais)


// extraindo o valor da propriedade do objeto e armazenando em uma variavel:

var usuario = {
    nome: 'Ayrton',
    idade: '27',
    pais: 'Brasil',
    youtube: 'programador a bordo'
}

var { nome: primeiroNome } = usuario // pega o valor da variavel nome do objeto usuario e armazena na variavel q declarei com nome de primeiroNome.
console.log(primeiroNome)

var { youtube: canal } = usuario
console.log(canal)

//=========//===============//

var usuario2 = {
    nome: {
        primeiro: 'ayrton',
        ultimo: 'Teshima',
    }
}
var { nome: { ultimo }}  = usuario2 
console.log(ultimo)

var usuario3 = {
    nome: {
        primeiro: 'etivaldo'       
    } 
}
 var {nome: { ultimo = 'souza'}}  = usuario3 // to querendo dizer q caso a propriedade ultimo ñ exista irá assumir o valor souza
 console.log(ultimo)

 //====================//==============================

function imprimeUsuario(usuario) {
    console.log(usuario.nome)
    console.log(usuario.idade)
    console.log(usuario.sexo)
}

var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: '26',
    sexo: 'M'
}

imprimeUsuario(usuarioFunction)

// ou posso aplicar apenas as propriedades que quero extrair do objeto


function imprimeUsuario({nome,idade,sexo, pais = 'Japão'}) {
    console.log(nome)
    console.log(idade)
    console.log(sexo)
    console.log(pais)
}

var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: '26',
    sexo: 'M'
}

imprimeUsuario(usuarioFunction)

// metodo objects.keys

console.log(Object.keys(usuarioFunction)) // mostra as propriedades do objeto

console.log(Object.values(usuarioFunction)) // mostra o valor do objeto


//===//======//================//=====================
// interação no objeto com o loop for

var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: '26',
    sexo: 'M'
}

var prop = Object.keys(usuarioFunction)
console.log(prop)

for(c = 0; c < prop.length; c++){
    console.log(`na posição ${c} está o valor ${prop[c]}`)
}

//================//====================

var usuarioFunction = {
    nome: 'Ayrton Teshima',
    idade: '26',
    sexo: 'M'
}

for(var prop in usuarioFunction){ 
    //console.log(prop) // retorna apenas as propiredades do objeto
    console.log(prop,':',usuarioFunction[prop]) //se eu quiser imprimir os valores das propriedades
}


