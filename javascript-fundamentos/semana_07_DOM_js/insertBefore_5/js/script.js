let sp1 = document.createElement('span') // crio o elemento

let txt = document.createTextNode('texto criado') // crio texto p/ o elemento criado

sp1.appendChild(txt) // add o texto criado(elemento filho) ao elemento criado(pai)


// pego o elemento que vai servir de referencia

let sp2 = document.querySelector('#childElement') 
 
// mando o js puxar o pai do elemento de referencia

let pai = sp2.parentNode  

// coloco o elemento criado antes do elemento de referencia

pai.insertBefore(sp1,sp2)

//pai.insertBefore(sp1,sp2.nextSibling) -> p/ adicionar o elemento depois