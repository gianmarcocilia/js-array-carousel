###Consegna
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.

**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

**MILESTONE 3**
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l'immagine attiva dovrà cambiare alla successiva.

**BONUS**
All'hover del mouse autoplay si ferma, quando il mouse si sposta fuori dal carousel, l'autoplay riparte.

###Soluzione
- Rimuovo il markup statico
- Inserisco le immagini dinamicamente
- Al click sul pulsante top, mostrare l'immagine precedente
Al click sul pulsante bottom, mostrare l'immagine successiva

**DATI**
- Array di immagini

**LOGICA**
- Sviluppo un ciclo for per ottenere ogni elemento di array.
- Inserisco dinamicamente gli elementi Immagine in pagina.
- Nascondo tutti gli elementi Immagine e lascio visibile soltanto il primo (assegno un indexImmagine 0 e classList.add) utilizzando la classe specifica "active"

- Imposto le condizioni eventListner al click:
    1. Al click sulla freccia bottom:
    Se l'indexImmagine è minore di (lunghezzaArray - 1) dell'array tolgo la classe active dall'emento visualizzato e incremento l'indice. Aggiungo la classe active al nuovo indice da visualizzare.

    2. Al click sulla freccia top:
    Se l'indexImmagine è maggiore di 0 tolgo la classe active dall'elemento visualizzato e decremento l'indice. Aggiungo la classe active al nuovo indice da visualizzare.

**BONUS**
- Imposto al click sulla freccia top: 
    ALTRIMENTI SE l'indexImmagine è = a 0 tolgo la classe active dall'elemento visualizzato e imposto l'indice a lunghezzaArray - 1. Aggiungo la classe active al nuovo indice da visualizzare.

- Imposto al click sulla freccia bottom:
    ALTRIMENTI SE l'indexImmagine è = a lunghezzaArray - 1 tolgo la classe active dall'elemento visualizzato e imposto l'indice a 0. Aggiungo la classe active al nuovo indice da visualizzare.


#### Svolgimento Milestone 3
**LOGICA**
- Imposto un setInterval iniziale per far partire lo slide delle pic all'apertura della pagina.
- aggiungo un eventListener mouseenter al mio slider che mi vada a ad annullare il setInterval iniziale.
- aggiungo eventListener mouseleave al mio slider che mi vada a far partire un nuovo setInterval.
- implemento al mouseenter un secondo clearInterval per stoppare il setInterval che partirà al mouseleave.