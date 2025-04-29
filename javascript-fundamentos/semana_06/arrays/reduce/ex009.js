/*
    conforme objeto abaixo Separe os alunos em 3 categorias:

    Os alunos são classificados assim:

    aprovados (nota maior ou igual a 8)

    recuperação (nota entre 6 e 7.9)

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

const sitFinal = alunos.reduce(function(acumulador,aluno){
    const sitAluno = aluno.nota >= 8 ? 'aprovado' : aluno.nota >= 6 ? 'recuperacao':'reprovado'
    acumulador[sitAluno].push(aluno)
    return acumulador   
},{aprovado:[],recuperacao: [],reprovado: []})

console.log(sitFinal)