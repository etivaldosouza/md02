// acessando por:

// tag: 


var titulo = document.getElementsByTagName('h1')[0] // uso do plural pq pode ser mais de uma tag h1

console.log(titulo)


var lis = document.getElementsByTagName('li')

console.log(lis)


//================//

// por id : 

// como o id só pode ter um por pagina, diferente de class que posso ter mais de uma class na mesma pagina como foi o caso da class 'item' o id será sempre com o singular(...getElementBytagname)


var paragrafo = document.getElementById('paragrafo')

console.log(paragrafo)


//===================//

// por class :


var itensDaLista = document.getElementsByClassName('item')

console.log(itensDaLista)


// formas mais moderna (querySelector e querySelectorAll)