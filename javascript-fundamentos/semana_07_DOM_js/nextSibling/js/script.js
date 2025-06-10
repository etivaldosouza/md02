
let tituloDiv = document.createElement('h3')

var txt = document.createTextNode('SPORT RECIFE')
tituloDiv.appendChild(txt)

var referenc = document.querySelector('.cx01 > .cx02')

var pai = referenc.parentNode

pai.insertBefore(tituloDiv,referenc)

