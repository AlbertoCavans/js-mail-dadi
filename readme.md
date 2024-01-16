# MAIL E DADI

## OBIETTIVI

### PARTE EMAIL

Costruire una pagina che chieda all'utente la sua email, controlli in modo automatico che sia nella lista di email che possono accedere e che stampi un messaggio appropriato sull'esito del controllo.

### PARTE DADI

In una pagina parallela costruire un giochino dove c'è un input in cui mettere un numero da 1 a 6 e premendo invio il computer genererà a sua volta un numero da 1 a 6, calcolando in modo automatico se ha vinto il giocatore, se ha perso oppure se hanno pareggiato. Infine il pc deve comunicare l'esito della partita al giocatore.

## SVOLGIMENTO

### PARTE EMAIL

- Collegare su JS gli elementi di html che serviranno durante l'esercizio, tramite il loro ID
- Costruire l'array con una lista di mail che possono accedere al gioco
- Costruire un ciclo for che controlli che la mail inserita da eventuali utenti della pagina sia una mail dentro l'array
  - SE la mail è dentro l'array il programma dovrà stampare sulla pagina "Accesso negato"
  - ALTRIMENTI SE la mail è dentro l'array il programma dovrà stampare sulla pagina "Benvenuto!"

### PARTE DADI

- Collegare su JS gli elementi di html che serviranno durante l'esercizio, tramite il loro ID
- Costruire la parte di codice dove il computer genera i due numeri random da 1 a 6
- Collegare il button di submit per far partire il gioco
- Costruire un ciclo for dove
  - SE il numero generato dal computer per sè stesso è maggiore di quello assegnato all'utente vengono mostrati i due numeri e la seguente scritta sul computer: "Hai perso",
  - ALTRIMENTI SE il numero generato dal computer per sè stesso è minore di quello assegnato all'utente vengono mostrati i due numeri e la seguente scritta sul computer: "Hai vinto",
  - ALTRIMENTI SE il numero generato dal computer per sè stesso è uguale a quello assegnato all'utente vengono mostrati i due numeri e la seguente scritta sul computer: "Hai pareggiato",
- Costruire la parte di codice che fornisce il numero del giocatore, il numero del computer e il risultato della sfida
