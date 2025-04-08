// "objetos é um tipo de valor. um valor que permite armazenar uma coleção de pares de chaves e valor.ou seja,  é conjunto de variaveis dentro de uma variavel."
// chave é a variavel e o valor é o valor da chave

var usuario = {
    nome: 'ayrton',
    idade: '26',
    youtube: 'Programador a bordo',   
    'ultimo-nome': 'Souza'   // quando tem caractere especial na chave tem q ta entre ''
}
console.log(usuario) // imprime todo o objeto

console.log(usuario.nome) // imprime apenas uma propriedade
console.log(usuario.idade)
console.log(usuario.youtube)
console.log(usuario['ultimo-nome']) // como a chave tem um caractere especial precisa estar entre aspas e dentro de colchetes.


// adicionando novas propriedades ao objeto ja criado.
//----------------------------------------------------

usuario.ano = 2025 // adicionando number
console.log(usuario)
console.log(usuario.ano)

// deletando propriedade (delete)

delete usuario.youtube
console.log(usuario)

// como chave valor de um objeto podemos passar uma function, um arrays, até outros obejetos ,etc.

usuario.hobbies = ['musica','programar','viajar'] //  array
console.log(usuario)

usuario.competencias = {  // objeto
    linguagens:['JavaScript','Python','go','Scala','PHP'],
    instrumentosMusicais: ['Guitarra','Baixo','Bateria']

}
console.log(usuario)

//=================// function como objeto //===========================

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
    idade // forma simplificada quando no nome é o mesmo(ñ preciso colocar idade = idade)
}
console.log(usuario3)

//------------------------//--------------------

/* 
    transformando mais de um objetos em apenas um: 
   ----------------------------------------------- 
*/

var usuario4 = {
    nome: 'Ayrton',
    idade: '26'
}

var extraInfo = {
    país: 'Brasil',
    estado: 'Rio de Janeiro'
}

var novoUsuario = Object.assign({},usuario4,extraInfo) // está colocando os dois objetos dentro de um objeto novo dentro das {} (forma mais indicada)
console.log(novoUsuario)

/*
  usando o usuario4 como objeto alvo, ou seja, é como se o objeto extraInfo fosse colocado dentro do usuario4
*/

var usuario4 = {
    nome:'Ayrton',
    idade: '26'
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}

Object.assign(usuario4,extraInfo )  // em vez de gerar um objeto novo aqui é como se eu estivesse colocando o objeto extraInfo dentro de usuario4
console.log('usuario4',usuario4)

//

var usuario4 = {
    nome:'Ayrton',
    idade: '26'
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}


var usuario5 = {
    usuario4,
    extraInfo
}

console.log("usuario 5", usuario5)

// utilizando o spred (como se estivesse usando o object.assign({},usuario4,extraInfo))

var usuario4 = {
    nome:'Ayrton',
    idade: '26'
}

var extraInfo = {
    pais: 'Brasil',
    estado: 'Rio de Janeiro'
}

usuario5 = {
    ...usuario4,
    ...extraInfo,
    sexo: 'M',
    profissao:'Programador'
}

console.log('usuario5', usuario5)





// getters e setters

var usuarios = [
    {
        nome: 'Ayrton',
        idade: '26'
    },

    {
        nome:'João',
        idade: '19'
    },
    {
        nome:'Maria',
        idade: '21'
    }
]

console.log(usuarios)
console.log(usuarios[1])
console.log(usuarios[0])



// criando objeto que vai servir para navegar no array

var usuarios = [
    {
        nome: 'Ayrton',
        idade: '26'
    },

    {
        nome:'João',
        idade: '19'
    },
    {
        nome:'Maria',
        idade: '21'
    }
]


var usuario = {
    posicao: 0,
    get atual(){ //get usada p/quando retorno valor
        return usuarios[this.posicao]
    },
    set atual(posicao){  // quando to atribuindo valor
        this.posicao = posicao
    },
    proximo(){
        ++this.posicao
    },
    anterior() {
        --this.posicao
        },
    }

    console.log(usuario.atual)
    usuario.proximo()
    
    console.log(usuario.atual)
    usuario.proximo()

    console.log(usuario.atual)

    usuario.atual = 0
    console.log(usuario.atual)
    usuario.atual = 2
    console.log(usuario.atual)

