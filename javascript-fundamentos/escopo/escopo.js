// escopo global: é tudo que é declarado no arquivo principal do js que é acessivel por toda a aplicação.

var nome = 'etivaldo'
console.log(nome)


function usuario(){
    console.log(nome)
}

usuario()


// escopo local: é variavel ou funções que estao acessiveis apenas dentro de um escopo de uma função.


function pessoa() {
    var nome = 'Etivaldo'
    console.log(nome)
}

pessoa()

console.log(nome) // ira dá erro pois a variavel nome só existe dentro do escopo da function pessoa.

// obs: é importante usar a palavra reservada var para declarar a variavel como local pois se eu usar a variavel sem a palavra reservada var a variavel passa a ser enxergada fora do escopo da funcao passando a ser uma variavel global ou seja ela passa a ser armazenada dentro do objeto window e torca-se acessivel em toda a aplicação

// exemplo: 

function imprimePais(){
    pais = 'Brasil' // sem a palavra reservada var
    console.log(pais)
}

imprimePais()

console.log(pais) // como ñ foi utilizada a palavra reservada var então a variavel país passa a ser enxergada tambem fora do escopo da função pois ela se torna global. por isso é muito importante optar por usar a palavra reservada var , let ou const.


//==============/ /============== ESCOPO DINÂMICO ===========/ /====================/ /====


// Escopo dinamico é o escopo do js em que a variavel só é determinada em tempo de execução

function imprimiThis(){
    console.log('imprimiThis', this)
}

function imprimeMensagem(){
    imprimiThis.call(['sou um objeto'])
}

function imprimeMensagem2(){
    imprimiThis.call(['sou um array'])
}

imprimeMensagem()
imprimeMensagem2()


//==============/ / escopo de bloco / /==========================

// let: usado para variaveis em escopo de bloco. ou seja p/  varuaveis dentro de um escopo de bloco tipo if, for etc. só vai ser vista dentro desse escopo

// o let é usado quando eu quero q a variavel exista apenas dentro de um escopo de bloco; para que ñ seja vista fora de um escopo de bloco. se eu quero q uma variavel seja vista dentro e fora de um determinado escopo eu devo usar a palavra variavel var.

// oo usar o var a variavel permite ser vista em mais de um escopo oq ñ acontece ao usar o let usado apenas para quando quero q ela funcione apenas dentro de um determinado escopo.

if (true){
    var youtube = 'programadoranordo'
    let autor = 'Ayrton' //*
    console.log(youtube)
    console.log(autor)
}

console.log(youtube)
console.log(autor) // * vai da erro pq foi usado a variavel com palavra reservada let. ela so funciona dentro do escopo do bloco



// ñ consigo redeclarar uma variavel com let
// no exemplo abaixo caso eu execute os dois grupos de codigos irá da erro diferende de se usar a variavel com var

let nome = 'etivaldo'
console.log(nome)

let nome = 'souza'
console.log(nome)

{
    let nome = 'coelho'
    console.log(nome)
}