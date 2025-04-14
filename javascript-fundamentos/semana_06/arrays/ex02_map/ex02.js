//Você tem um array com nomes de pessoas em letras minúsculas, e precisa usar o método map() para formatar os nomes corretamente: primeira letra maiúscula, o restante minúsculo.
// TODO: Use map() para formatar cada nome com a primeira letra maiúscula e o restante minúsculo

let nomes = ["ana", "joÃO", "mARia", "CARLOS", "beatriz"];

let primMaiusc = nomes.map(function(str){
    return str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()// vai pegar do elemento do indice um em diante
})


console.log(primMaiusc)



// revisão metodo slice(): remove os itens e retorna itens removidos
// 1ºparametro indica o indice a partir do qual vai remover e o segundo quantidade de itens que vai remover a partir do primeiro indice. se coloca apenas um valor no parametro indica que vc vai remover a partir dele até o final

let nomes =  ['etivaldo', 'carlos','souza','pedro','guatavo']

let novo = nomes.slice(0,3) // remove o elemnto d indice 0 até o de indice 2(sempre um a menos)
console.log(novo)