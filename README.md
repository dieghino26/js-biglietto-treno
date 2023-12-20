## JS BIGLIETTO DEL TRENO

Ciao ragazzi! <br>
**Esercizio** di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


### Procedimento

- viene chiesto il numero di km da percorrere
- viene chiesta l'età dell'utente
- viene moltiplicato il prezzo di un km per i km desiderati dall'utente
- 1 si verifica l'età dell'utente
    - **se** l'utente  è un adulto
        - non riceve lo sconto
    - **altrimenti**
        - si torna al punto 1
    - **se** l'utente ha meno di 18 anni
        - riceve uno sconto del 20%
    - **altrimenti**
        - si torna al punto 1
    - **se** l'utente ha più di 65 anni
        - riceve uno sconto del 40%
    - **altrimenti**
        - si torna al punto 1
- viene restituito il prezzo del biglietto con massimo due decimali

    