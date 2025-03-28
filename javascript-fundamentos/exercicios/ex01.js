
var num = [10, 20, 30, 40, 50]

s = 0
for(var c = 0; c < num.length;c++){ 
   s = s + num[c]
}
console.log(`soma vale ${s}`)

//obs : c < num.length 
// enquanto contador for menor que a quantidade de elementos(comprimento) de num
//num.length =  5
// lembrando q: c0 = primeiro elemento = 10 , c1 = segundo elemento = 20... vai ate o c4 = 50 