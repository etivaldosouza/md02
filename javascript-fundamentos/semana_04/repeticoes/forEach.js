/*
    forEach(item,index,array)

    item: dados/informações contidos na posição atual do array(obrigatorio)
    index: número da posição. sempre começamdo em 0(opcional)
    arrray: retorna o array completo(opcional)

*/

// descubra se o cliente é menor de idade ou ñ

const usuarios = [
    {nome:'Rodolfo',idade: 33, contato:'(19) 94343-3434'},
    {nome:'Paulo',idade: 21, contato:'(12) 93443-3434'},
    {nome:'Aline',idade: 40, contato:'(13) 94566-3434'},
    {nome:'Maria',idade: 12, contato:'(14) 94343-3476'},
]

usuarios.forEach(function(item,index){
  if(item.idade < 18){
    console.log(`o cliente ${item.nome},na posição ${index} é menor de idade`) 
  }else{
    console.log(`o cliente ${item.nome} na posição ${index} é maior de idade`) 
  }
 
})






