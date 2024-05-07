/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 10;
let y = 15;

if (x > y) {
  console.log("x è maggiore di y")
}
else {
  console.log("y è maggiore di x")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let randomNum = Math.floor((Math.random() *10) + 1);
let randomNum2 = Math.floor((Math.random() *10) + 1)

if (randomNum != 5) {
  console.log(randomNum);
  console.log('not equal')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if ((randomNum % 5) == 0) {
  console.log(randomNum);
  console.log('questo numero è divisibile per 5')
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (randomNum === 8) {
  console.log('questo numero è uguale a 8')
}
if ((randomNum + randomNum2) == 8) {
  console.log(randomNum, randomNum2);
  console.log('la loro somma è uguale a 8')
}
if ((randomNum - randomNum2) == 8) {
  console.log(randomNum, randomNum2);
  console.log('la loro differenza è uguale a 8')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = Math.floor((Math.random() * 75) + 1);
let shipping = 10;

console.log('totale della spesa: ', totalShoppingCart);

if(totalShoppingCart > 50) {
  console.log('Spedizione gratuita!');
  console.log('Il totale è: ', totalShoppingCart);
}
if (totalShoppingCart < 50) {
  console.log('Spedizione non gratuita');
  console.log('Costo della spedizione: ', shipping);
  console.log('Il totale è: ', totalShoppingCart + shipping);
  totalShoppingCart += shipping;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let scontoBlackFriday = totalShoppingCart * 0.2;

console.log('totale sconto: ', scontoBlackFriday.toFixed(1))

console.log('Solo per oggi che è il Black Friday, per te, un\'offerta del 20% su ogni prodotto!!!');
console.log('il nuovo totale della sua spesa è: ', totalShoppingCart - scontoBlackFriday);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = Math.floor((Math.random() * 100) + 1);
let b = Math.floor((Math.random() * 100) + 1);
let c = Math.floor((Math.random() * 100) + 1);
let temp;



 if (a < b) {
  if (a < c) {
    if (b < c) {
      console.log(c, b, a);
    }
    else {
      console.log(b, c, a);
    }
  }
  else {
    console.log(b, a, c);
  }

} 
else {
  if (a < c) {
    console.log(c, a, b);
  }
  else {
    if (b < c) {
      console.log(a, c, b);
    }
    else {
      console.log(a, b, c);
    }
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valoreCasuale = 'luis';

if (typeof valoreCasuale === 'number') {
  console.log('è un numero');
}
else {
  console.log('non è un numero');
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numeroFornito = Math.floor((Math.random() * 100) + 1);
console.log('il numero fornito è: ', numeroFornito);

if ((numeroFornito % 2) == 0) {
  console.log('Il numero fornito è pari')
}
else {
  console.log('Il numero fornito è dispari')
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = Math.floor((Math.random() * 15) + 1);

console.log(' Il valore casuale è: ', val);
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

console.log(me.skills);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const arrayVuoto = [];

arrayVuoto.push(1,2,3,4,5,6,7,8,9,10);

console.log(arrayVuoto);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arrayVuoto.pop();
arrayVuoto.push(100);

console.log(arrayVuoto);

/* SCRIVI QUI LA TUA RISPOSTA */
