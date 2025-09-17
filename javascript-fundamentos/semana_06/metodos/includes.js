
/* metodo includes() 
---------------------

verificar se no array existe determinado elemento e retorna true ou false. a diferença p/ o .indexOf() é que o indexOf() retorna a posição do elemento no array e quando ñ encontra retrona -1.

*/

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
console.log(usuario.includes(26)) // retorna true se tiver
console.log(usuario.indexOf('Brasileiro')) // retorna posição do elemento se ele tiver no array se ñ tiver ele retorna -1.

/*
posso usar dentro de um if/else:

if(usuario.include('brasileiro')){
    codigo
}

*/

let nomes = ['Etivaldo', 'Ana', 'Bia','Maria']

if(nomes.includes('Etivaldo')){
    console.log(`olá Etivaldo!`)
}else{
    console.log(`nome não consta na lista`)
}

//=============================================================//

// procura se existe um item do array e retorna true ou false

const numeros = [1,5,6,8,20,45,50]

console.log(numeros.includes(10))

//========================================================


const pessoas = ['adamastor','joana','mauricio','lalau']

console.log(pessoas.includes('neto'))


//==========================================================



// utilizando o indexOf()

// procura se tem o elemento no array, se tiver retorna a posição do elemento no array caso contrario retorna -1



const numeros = [1,5,6,8,20,45,50]

console.log(numeros.indexOf(10))

console.log(numeros.indexOf(20))
