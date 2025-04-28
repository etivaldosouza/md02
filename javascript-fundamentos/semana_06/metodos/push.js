
/* metodo push() 
-----------------

(quando quero incluir elemento novo no fim do array)

*/

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
console.log(usuario)

// p/ incluir elemento(s) no final do array:

usuario.push('RJ','PE') // se eu jogar dentro de uma variavel e mandar imprimir ele retorna o tamanho da variavel(qte de elementos) *
console.log(usuario)

const elementosNovos = usuario.push('RJ','PE') //* retorna quantidade de elementos
console.log(elementosNovos)
