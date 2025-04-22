const frutas = [
    {
        nome: 'jaca',
        quantidade: 2

    },

    {
        nome: 'banana',
        quantidade: 0
        
    },

    {
        nome: 'cereja',
        quantidade: 5
        
    }

]

const frutaCereja = frutas.find(function(fruta){
    return fruta.nome === 'cereja'
})

console.log(frutaCereja)