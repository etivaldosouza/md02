// é uma palavra reservada que dependendo de onde a gente usa dentro do sistema ela assume um valor diferente(possui um escopo dinânico)

function Usuario() {
    this.nome = 'Ayrton',//criando propriedades p/ o objeto this
    this.idade = 27,
    this.soma = function(a,b){
        return a+b
    }
}
   // Usuario()

 //console.log(new Usuario())  //quando uso o new p/ alterar o valor de this ele passa a valer um objeto da function

// quando invocamos uma function com o operador new ele sempre vai retornar o this, por isso podemos armazenar essa function em uma variavel.

var prop = new Usuario() // maneira armazenando em var
console.log(prop)

console.log(prop.nome)
console.log(prop.idade)
console.log(prop.soma(10,4))


//=========== / / ======================= / / ==============/ / ===============//

//metodo call(ourtra forma de alterar o this)


function personagem(){ // 1º
    console.log(this)
}


var meuObjeto = {  
    nome: 'Etivaldo' // 2º
}

personagem.call(meuObjeto) //3º invocando a function com call passando um this para ela explicitamente.onde o primeiro parametro é o valor de this que a function vai usar. como quero que esse 1ºparametro seja um objeto entao eu crio o objeto conforme acima e usa ele como parametro da função.

//============= // ==================== // =============================// ==============


// obs: no call, do 2º parametro em diante vao ser os parametros que a function vai receber

function personagem(a1,a2,a3){
    console.log(this)
    console.log(a1,a2,a3)
}

var pessoa = {
    nome: 'Etivaldo',
    idade: 25
}
personagem.call(pessoa,'front-end,','módulo2,','manhã')

//============//================//===========================

function personagem(a1,a2){
    console.log(this)
    console.log(a1,a2)
}

personagem.call('Etivaldo',42,'M') // posso passar qualquer valor no 1º parametros como this


// ================== // Metódo apply // ======================== // ==================

// metodo Apply: (outro metodo de alterar o this)
// a diferença p/ o call é que no apply do 2ºparametro em diante os valores tem q ser colocado dentro de colchetes(no array)


function personagem(p1,p2,p3,p4){
    console.log(this)
    console.log(p1,p2,p3,p4)
}

var pessoa = {
    nome: 'etivaldo',
    sobrenome: 'Souza'
}

personagem.apply(pessoa,[42,'front-end,','Manhã',['java','php']]) // a diferença p/ o call é que no apply do 2ºparametro em diante os valores tem q ser colocado dentro de colchetes