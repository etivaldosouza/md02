// metodo slice: exclui elementos atraves do intervados de indices indicado no parametro. onde no primeiro parametro da funcao é o primeiro elemento do intervalo a ser removido e o segundo valor de indice indica até onde vai remover desconsiderando o ultimo.

//retorna uma copia do array sem modificar o array original.

const frutas = ['Banana','laranja','Limão','Maça','Manga']
const citrus = frutas.slice(1,3) // remove  elento do indice 1 até  o elemento de indice 2 
console.log(citrus)
console.log(frutas)

//=============/ /===========/ /=================/ /===================

const usuarios = ['Etivaldo','Pedro','Carlos','Karine','Carol','Jose']
const remove = usuarios.slice(2,5) // remove elemento de indice 2 até o de indice 4
console.log(`os removidos foram: ${remove}` )
console.log(usuarios)

// obs se omitir o segundo argumento ele remove até o fim