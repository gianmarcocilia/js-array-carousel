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