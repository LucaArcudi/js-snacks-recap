// Consegna primo snack:
//
// Creare due div; uno conterrà numeri dispari di colore rosso e l'altro conterrà numeri pari in verde.
//  Ad ogni click di un bottone chiedere all'API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari.
//La nostra API ha i seguenti endpoint:
// https://flynn.boolean.careers/exercises/api/random/int (ritorna un numero da 1 a 9)
// https://flynn.boolean.careers/exercises/api/random/word (ritorna una parola)
// https://flynn.boolean.careers/exercises/api/random/name (ritorna un nome)
// https://flynn.boolean.careers/exercises/api/random/mail (ritorna una email)
// https://flynn.boolean.careers/exercises/api/random/phone (ritorna un numero di telefono)
// https://flynn.boolean.careers/exercises/api/random/sentence (ritorna una frase)
// https://flynn.boolean.careers/exercises/api/random/boolean (ritorna o vero o falso)
// https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n (ritorna un array di items numeri, contenuti nel range min-max)



const { createApp } = Vue

createApp({
  data() {
    return {
      oddNumbers : [],
      evenNumbers : []
    }
  }
}).mount('#app')