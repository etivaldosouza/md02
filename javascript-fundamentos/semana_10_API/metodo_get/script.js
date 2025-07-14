
const URL = 'https://dummyjson.com/products';

async function chamarApi() {
    const resposta = await fetch(URL);
    //console.log(resposta) dou esse console.log caso queira vê o status
    
    if(resposta.status === 200){
        const obj = await resposta.json()
        console.log(obj)
    }
}

chamarApi()




