
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