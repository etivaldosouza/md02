const pessoas = [
    {
        id: 11,
        nome: 'adamastor',
        age:23,
        grupo: 'editor',
    },

    {
        id:47,
        nome: 'joana',
        age: 28,
        grupo: 'usuario'
    },

    {
        id: 85,
        nome: 'mauricio',
        age: 34,
        grupo:'editor',
    },

    {
        id: 97,
        nome:'lalau',
        age: 74,
        grupo:'administrador',
    }

]

const FilterUser = pessoas.filter(pessoa => pessoa.nome.includes('au')).map(usuario => usuario.nome)

console.log(FilterUser) // usei o map no final para buscar apenas pela propriedade nome