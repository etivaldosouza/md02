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