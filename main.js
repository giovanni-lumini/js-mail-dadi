console.log("hello");

//EMAIL
//Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo

//1-fare una lista [array] con varie email
//2-con un prompt chiedere all'utente la sua email
//3-se c'è l'email, stampare: email presente nella lista
//4-se non c'è l'email, stampare: email non presente nella lista

let email_list=["giovanni@gmail.com", "stefano@gmail.com", "nicola@gmail.com"];
let user_email=prompt("inserisci la tua email")
console.log(user_email);

if (email_list.includes(user_email)){
    console.log("email presente nella lista");
}else{
    console.log("email non presente nella lista");
}


//GIOCO DEI DADI
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1-generare numero per il giocatore
//2-generare numero per il player
//3-se il giocatore ha il numero più alto ha vinto
//4-se il computer ha il numero più alto ha vinto

let player=(Math.floor(Math.random()*7)+1);
let computer=Math.floor(Math.random()*7)+1;
/* console.log(player);
console.log(computer); */
if(player>computer){
    console.log(`Player WINS with ${player} and Computer loses with ${computer}`);
}else if (player==computer){
    console.log(`Parity, Player with ${player} and Computer with ${computer}`);
}else{
    console.log(`Computer WINS with ${computer} and Player loses with ${player}`);
}




/* SUGGERIMENTI
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon divertimento e confermate lettura come al solito */