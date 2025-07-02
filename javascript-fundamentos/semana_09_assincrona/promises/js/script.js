// criação de promessa (Promise)


const promessa = new Promise(function(resolve,reject){  // 1
    const nome = 'Etivaldo'

    if(nome === 'Etivaldo'){
        resolve('Usuario Etivaldo Encontrado')
    } else {
        reject('Usuário Etivaldo não foi Encontrado')
    }
})

promessa.then(function(resposta){  // resposta(posso dá qualquer nome como parametro) é o resultado que tô esperando  pra minha promessa(postivo ou erro)

    console.log(resposta)
})


// explicação :

// 1) instaciamos a classe promisse() e colocamos numa variavel. após instanciar a classe precisamos resolver(resolve) ou rejeitar(erro)/(reject) essa classe baseada no resultado da promessa e para isso criamos uma função com os dois parametros(resolve/reject)

// quando receber os dados por exemplo de uma requisicao externa a gente vai verificar se esse dado que etamos recebendo é oq a gente quer. entao fazemos um if / else 

// e depois usamos o metodo then() com uma função, utilizando um parametro qualquer, no nosso caso chamei o parametro de "resposta", ou seja, essa "resposta", será a nossa resposta do resolve ou do reject.


// encadeamento de then's

const promessa2 = new Promise(function(resolve,reject){
    const nome = 'Etivaldo'

    if(nome === 'Etivaldo'){
        resolve('Usuário Etivaldo Encontrado')        
    }else {
        reject('usuário Etivaldo não Foi Encontrado')
    }
})

promessa2.then(function(resposta){
    return resposta.toLowerCase()    
})
.then(function(tudoMinusculo){ // tudoMinusculo é o nome q dei para o argumento que estou esperando vindo do argumento anterior(resposta)
    console.log(tudoMinusculo)
})

 
//======================//======================//=================

//  retorno do catch()

const promessa3 = new Promise(function(resolve,reject){
    const nome = 'Karine'

    if(nome === 'Etivaldo'){
        resolve('Usuário Etivaldo Foi Encontrado')
    }else {
        reject('Usuário Etivaldo não foi Encontrado')
    }
})

.then(function(dados){
    console.log(dados)
})
.catch(function(erro){   // o argumento erro vai receber a mensagem q ta vindo do argumento anterior(dados)
    console.log(`aconteceu um erro: ${erro}`)
})



// resolver várias promessas com all

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('p1 ok! Timeout')
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!')
})

const p3 = new Promise((resolve,reject) => {
    resolve('p3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((dados) => {
    console.log(dados)
})


console.log('depois do All') // pra mostrar que primeiro o programa executa esse codigo depois executa as promessas e por ultimo o metodo all.

//===================================//=========================//


//  várias promessas com race

const p4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('p1 ok! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('p5 ok!')
})

const p6 = new Promise((resolve,reject) => {
    resolve('p6 ok!')
})

const resolveRace = Promise.race([p4, p5, p6]).then((dados) => {
    console.log(dados)
})

// Fetch request na API do Github
// Fetch API

const userName = 'etivaldosouza'
fetch(`https://api.github.com/users/${userName}`,{
    method: 'GET',
    headers: {
        accept: 'application/vnd.github.v3+json',
    },

}).then((resposta) => {
    console.log(typeof resposta)
    console.log(resposta)
    return resposta.json() 
}).then((dados) => {
    console.log(`o nome do usuário é ${dados.name}`)

})

.catch((err) => {
    console.log(`houve algum erro: ${err}` ) // caso eu queira q apareça a msg em caso de erro
})