/* conforme objeto abaixo Separe os alunos em:

    aprovados (nota maior ou igual a 6)

    reprovados (nota menor que 6)

*/

const alunos = [
    { nome: 'Pedro', nota: 7.5 },
    { nome: 'Ana', nota: 5.2 },
    { nome: 'Carlos', nota: 9.1 },
    { nome: 'Beatriz', nota: 4.8 },
    { nome: 'Fernanda', nota: 6.0 },
    { nome: 'Marcos', nota: 3.9 },
    { nome: 'Lucas', nota: 8.2 },
    { nome: 'Patrícia', nota: 5.5 },
]

const apRp = alunos.reduce(function(acumulador,aluno){
    const aprovReprov = aluno.nota >= 6 ? 'aprovado' : 'reprovado'
    acumulador[aprovReprov].push(aluno)
    return acumulador
},{aprovado:[],reprovado: []})

console.log(apRp)