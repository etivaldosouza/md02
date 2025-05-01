/*
    conforme array de objeto abaixo tranforme em um objeto com duas categorias: frutas e verduras



*/

const produtos = [
    { nome: 'Banana', categoria: 'Fruta' },
    { nome: 'Maçã', categoria: 'Fruta' },
    { nome: 'Cenoura', categoria: 'Legume' },
    { nome: 'Batata' , categoria: 'Legume'}
  ];

  const agrupaCategoria = produtos.reduce(function(acumulador,produto){
    const cate = produto.categoria === 'Fruta'? 'Fruta' : 'Legume' 
    acumulador[cate].push(produto.nome)
    return acumulador
  }, {Fruta:[], Legume: []} )


  console.log(agrupaCategoria)




  