/*
const cafe = new Promise((resolve,rejetct) => {
    rejetct('joão ñ concluiu a promessa')
})

cafe.then((dados) => {
    console.log(dados)
})

.catch((dados) => {
    console.log('erro:', dados)
})

*/

function getUserGithub() {
    fetch('api.github.com/users/etivaldosouza')
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((resultado) => {
        console.log('erro:', resultado)
    })
}

getUserGithub()