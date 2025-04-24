const data = [
    {
        name: 'sujeito',
        age: 23,
        salary: 4000,
        active: false,
        team: 'Frontend',
        bonus:0,
    },

    {
        name:'jose',
        age:36,
        salary:3000,
        active:true,
        team:'backend',
        bonus:0,
    },

    {
        name:'ana carroline',
        age: 32,
        salary:6000,
        active:true,
        team:'mobile',
        bonus:0,
     
    }, 

    {
        name:'bauer',
        age:20,
        salary:3500,
        active:true,
        team:'frontend',
        bonus:0,
    },

    {   
        name:'mathues',
        age:22,
        salary:2500,
        active:false,
        team:'mobile',
        bonus:0,
    }

]

const user = data.filter(function(users){ //users é uma variavel que crio q vai armazenar cada elemento(item) do array
    return users.salary >= 4000 && users.active // somente os >=4000 e active 
}).map(nomes => ({name: nomes.name,salary: nomes.salary})); // caso eu queira que a saida seja apenas as propriedades  nomes e salario
console.log(user)

// o filter também recebe uma funcao onde  conforme a condição passada irá retornar um array com os elementos econtrados diferentemente do find() q retorna sempre o primeiro.