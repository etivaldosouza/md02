/*  
    exercicio - indexar por Id
    Transformar array de objetos em objeto indexado por ID
*/

const usuarios = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Bruno' },
    { id: 3, nome: 'Karine'}
  ];

  const usuarioPorId = usuarios.reduce(function(acumulador,usuario){
    acumulador[usuario.id] = usuario.nome
    return acumulador

  },{})

  console.log(usuarioPorId)




  const usuarios = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Bruno' }
  ];
  
  const usuariosPorId = usuarios.reduce((acc, usuario, index) => {
    console.log(`Passo ${index + 1}:`);
    console.log('Antes:', JSON.stringify(acc));
  
    acc[usuario.id] = usuario;
  
    console.log(`Adicionando id ${usuario.id}:`, usuario);
    console.log('Depois:', JSON.stringify(acc));
    console.log('---');
    return acc;
  },{});