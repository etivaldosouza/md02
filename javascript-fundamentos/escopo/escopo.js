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

// obs: é importante usar a palavra reservada var para declarar a variavel como local pois se eu usar a variavel sem a palavra reservada var a variavel passa a ser enxergada fora do escopo da funcao passando a ser uma variavel global ou seja ela passa a ser armazenada dentro do objeto window

// exemplo: 

function imprimePais(){
    pais = 'Brasil' // sem a palavra reservada var
    console.log(pais)
}

imprimePais()

console.log(pais) // como ñ foi utulizada a palavra reservada var então a variavel país passa a ser enxergada tambem fora do escopo da função pois ela se torna global. por isso é muito importante optar por usar a palavra reservada var , let ou const.