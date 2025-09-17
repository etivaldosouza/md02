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
var n3 = res.push('100') // ñ é obrigado criar a variavel.
console.log(res)


// ...spreed


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
var nome = usuario[0] // usuario na posição 0
var idade = usuario[1] // usuário na posição 1
var ano = usuario[3] // usuário na posição 3
console.log(nome,idade,ano)

// forma atualizada com o ecascript 6 usando o Destructin:

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro'] // array


var [nome,idade, , ,nacionalidade] = usuario; // destructure

console.log(nome,idade,nacionalidade)



// vc cria as variaveis para pegar cada elemento na posição correspondente da variavel usuario. obs: na posição 2 esta vazia ou seja vai pular p/ posiçao 3
//na var nome por estar na posição 0 eu quero q seja armazenado  o elemento da posição 0 do array usuario, na var idade por esta na posição 1 vai pegar o elemento da posição do array usuario e assim sucessivamente 
// as virgulas são para pular para poder pegar o elemento da ordem correspondente.


// exercicios de Destructuring:
// extraia os valores a,b e do array abaixo:

// forma antiga

const numeros = [10, 20, 30];
var a = numeros[0]
var b = numeros[1]
var c = numeros [2]
console.log(a,b,c)

// usando o destructuring no array

const numeros = [10, 20, 30]; //array

var [a,b,c] = numeros // destructure
console.log(a,b,c)

//=========================================//

let livros = []

// ex02:

// Extraia os valores de nome e idade do objeto abaixo:

const pessoa = {
  nome: "Lucas",
  idade: 25
};

// forma antiga

var nome = pessoa.nome
var idade = pessoa.idade
console.log(nome,idade)

// usando o destruturing no objeto

const pessoa = {
  nome: "Lucas",
  idade: 25
};

var {nome,idade} = pessoa
console.log(nome,idade)