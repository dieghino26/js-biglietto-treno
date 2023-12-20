const total = document.getElementById("total")



//chiedo info all'utente
const kms = parseInt(prompt("quanti km devi percorrere?").trim())
const age = parseInt(prompt("quanti anni hai?"))

//calcolo del prezzo
let price = kms * 0.21;
let discount = null


if (age < 18) {
    discount = 20
} else if (age > 65) {
    discount = 60
}


if (discount) {
    price = price - (price / 100) * discount
}



total.innerText = "Il biglietto costa: €" + price.toFixed(2) 