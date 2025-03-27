var numeros = [5,3,12,17,10,99]

console.log(numeros)

console.log(numeros[3]) // imprime o nr que esta na posição 3
console.log(numeros[0]) // primeira posição
console.log(numeros.length) // quantidade de elementos do array

// metodo .pop()
var numeros = [5,3,12,17,10,99]
var numeroRetornado = numeros.pop() // remove o ultimo elemento
console.log(numeroRetornado) // retorna esse ultimo elemento do array e remove ele.
console.log(numeros) // sem o 99

//metodo .slice(): fatiamento

var numeros = [5,3,12,17,10,99]
console.log(numeros.slice(0,4)) // vai imprimir do 1º até o elemento da 3ª posição pois o 4º ñ entra. sempre o ultimo elemento ñ entra. se quero incluir o ultimo somo ele +1 ou coloco o elemento subsequente da sua posição.

console.log(numeros.slice(0,5)) // p/ incluir o 10

console.log(numeros.slice(2)) // posso omitir o ultimo elemento e ai ele vai mostrar do elemento da posição 2 até o ultimo

//metodo .join(uma str usada para separar um elemento do array do proximo)

var numeros = [5,3,12,17,10,99]
console.log(numeros.join('--'))
console.log(numeros.join('   '))
console.log(numeros.join(' -> '))


/* metodo push() 
-----------------

(quando quero incluir elemento novo no fim do array)

*/

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
console.log(usuario)
//p/ incluir elemento(s) no final do array:
usuario.push('RJ','PE') 
console.log(usuario)


/* metodo includes() 
---------------------

verificar se no array existe determinado elemento e retorna true ou false. a diferença p/ o .indexOf() é que o indexOf() retorna a posição e quando ñ encontra retrona -1

*/

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
console.log(usuario.includes(26)) // retorna true se tiver
console.log(usuario.indexOf('Brasileiro')) // retorna posição do elemento se ele tiver no array se ñ tiver ele retorna -1.

/*
posso usar dentro de um if/else:

if(usuario.include('brasileiro')){
    codigo
}

/* metodo .concat()
--------------------
quando quero juntar dois arrays

*/

var arr1 = [3,2,1]
var arr2 = ['programador', 'a','bordo']
var resultado = arr1.concat(arr2)
console.log(resultado)


var n1 = [3,5,9]
var n2 = [10,11,12]
var res = n1.concat(n2)
console.log(res)
var n3 = res.push('100')



var arr1 = [3,2,1]
var arr2 = ['programador','a','bordo']

console.log([arr1,arr2])
console.log([...arr1,...arr2]) //usando o spread(...)
// o spread espalha os arrays em um unico array


/* 

forma de pegar os arrays e colocar dentro de uma variavel:

forma antiga:

*/
var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
var nome = usuario[0]
var idade = usuario[1]
var ano = usuario[3]
console.log(nome,idade,ano)

// forma atualizada com o ecascript 6 usando o Destructin:

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']

var [nome,idade, , ,nacionalidade] = usuario; 
console.log(nome,idade,nacionalidade)

// vc cria as variaveis para pegar cada elemento na posição correspondente da variavel usuario. obs: na posição 2 esta vazia ou seja vai pular p/ posiçao 3
//na var nome por estar na posição 0 eu quero q seja armazenado  o elemento da posição 0 do array usuario, na var idade por esta na posição 1 vai pegar o elemento da posição do array usuario e assim sucessivamente 
// as virgulas são para pular para poder pegar o elemento da ordem correspondente.

