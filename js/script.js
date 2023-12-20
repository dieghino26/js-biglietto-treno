const total = document.getElementById("total")



//chiedo info all'utente
const kms = parseInt(prompt("quanti km devi percorrere?").trim())
const age = parseInt(prompt("quanti anni hai?"))

//calcolo del prezzo
let price = kms * 0.21;

if (age < 18) {
    price = (price * 0.8)
} else if (age > 65) {
    price = (price * 0.6)
}



total.innerText = "Il biglietto costa: €" + price.toFixed(2) 