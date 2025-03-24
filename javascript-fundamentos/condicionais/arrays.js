var numeros = [5,3,12,17,10,99]

console.log(numeros)

console.log(numeros[3]) // imprime nr na posição 3
console.log(numeros[0]) // primeira posição
console.log(numeros.length) // quantidade de elementos do array

// metodo .pop()
var numeroRetornado = numeros.pop() // remove o ultimo elemento
console.log(numeroRetornado) // retorna esse ultimo elemento do array e remove ele.
console.log(numeros) // sem o 99

//metodo .slice() fatiamento

var numeros = [5,3,12,17,10,99]
console.log(numeros.slice(0,4)) // vai imprimir do 1º até o elemento da 3ª posição pois o 4º ñ entra. sempre o ultimo elemento ñ entra. se quero incluir o ultimo somo ele +1 ou coloco o elemento subsequente da sua posição.

console.log(numeros.slice(0,5)) // incluir o 10

console.log(numeros.slice(2)) // posso omitir o ultimo elemento e ai ele vai mostrar do elemento da posição 2 até o ultimo

//metodo .join(uma str usada para separar um elemento do array do proximo)

var numeros = [5,3,12,17,10,99]
console.log(numeros.join('--'))
console.log(numeros.join('   '))


/* metodo push() 
-----------------

(quando quero incluir elemento novo no fim do array)

*/

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
//p/ incluir elemento(s) no final do array:
usuario.push('RJ','PE')
console.log(usuario)


/* metodo includes() 
---------------------

verificar se no array existe determinado elemento e retorna true ou false a diferença p/ o .indexOf() é que ele retorna a posição e quando ñ encontra retrona -1

*/

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
console.log(usuario.includes(26)) // retorna true se tiver
console.log(usuario.indexOf('Brasileiro')) // retorna posição do elemento se ele tiver no array se ñ tiver ele retorna -1.


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






