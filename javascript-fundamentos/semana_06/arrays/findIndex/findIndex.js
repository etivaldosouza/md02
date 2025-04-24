// o findIndex() utilizado para quando queremos encontrar um elemento e a posição dele dentro do array. o retorno será a posição do 1º elemento encontrado


const data = [
    {
        name: 'sujeito',
        age: 23,
        salary: 4000,
        active: true,
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

const pessoa = data.findIndex(function(nomes){
    return nomes.name === 'bauer'
}) 

console.log(pessoa)
console.log(data[pessoa].active = false) // alterando a propriedade active o objeto data
console.log(data)



/*
    console.log((pessoa).active = false) // alterando a propriedade active
    console.log(data.active = false)
    console.log(data)
    ou :
*/ 