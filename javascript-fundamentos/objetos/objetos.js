// "objetos é conjunto de variaveis dentro de uma variavel."

var usuario = {
    nome: 'ayrton',
    idade: '26',
    youtube: 'Programador a bordo'      
}
console.log(usuario) // imprime todo o objeto

console.log(usuario.nome) // imprime apenas uma propriedade
console.log(usuario.idade)
console.log(usuario.youtube)

// adicionando novas propriedades ao objeto ja criado.

usuario.ano = 2025
console.log(usuario)
console.log(usuario.ano)

// deletando propriedade (delete)

delete usuario.youtube
console.log(usuario)

// como chave valor de um objeto podemos passar uma function, um arrays, até outros obejetos ,etc.

usuario.hobbies = ['musica','programar','viajar']
console.log(usuario)

usuario.competencias = {
    linguagens:['JavaScript','Python','go','Scala','PHP'],
    instrumentosMusicais: ['Guitarra','Baixo','Bateria']

}
console.log(usuario)

// function como objeto 

var usuario2 = {
    digaOi: function(name){
        return `olá ${name}`
    }
}
console.log(usuario2)
console.log(usuario2.digaOi('Ayrton'))
console.log(usuario2.digaOi('Etivaldo'))

//passando variavel como valor de uma chave no objeto

var cor = 'azul'
var idade = '25'

usuario3 = {
    nome:'ayrton',
    cor: cor, // quando o nome da propriedade do objeto usuario3 é o mesmo da variavel, o valor da propriedade será o valor da variavel
    idade // forma simplificada quando no nome é o mesmo
}
console.log(usuario3)

// transformando mais de um objetos em apenas um:

var usuario4 = {
    nome: 'Ayrton',
    idade: '26'
}

var extraInfo = {
    país: 'Brasil',
    estado: 'Rio de Janeiro'
}

var novoUsuario = Object.assign({},usuario4,extraInfo)
console.log(novoUsuario)