//Genero 100 nomi per gli oggetti giocatori
var nomiGiocatori = [];
for (var i = 0; i < 100; i++) {
  nomiGiocatori.push("Giocatore" + (i + 1));
}
console.log(nomiGiocatori);

//Creo gli oggetti e gli assegno dei valori
var containerGiocatori = [];
for (var i = 0; i < nomiGiocatori.length; i++) {
  var codiceGiocatore = creaCodice();
  var puntiFatti = Math.floor(Math.random() * 31);
  var rimbalzi = Math.floor(Math.random()*(55 - 20 + 1) + 20);
  var falli = Math.floor(Math.random() * 3);
  var percSuccDuePunti = Math.floor((Math.random() * 100) + 1);
  var percSuccTrePunti = Math.floor((Math.random() * 100) + 1);
  nomiGiocatori[i] = {
      "codice_Giocatore" : codiceGiocatore,
      "punti_Segnati" : puntiFatti,
      "num_Rimbalzi" : rimbalzi,
      "falli" : falli,
      "successo_duePunti" : percSuccDuePunti,
      "successo_trePunti" : percSuccTrePunti
  }
}

//Faccio scegliere all'utente cosa fare
var inputUser = parseInt(prompt("Cosa vuoi fare? Inserisci 0 per terminare il programma - 1 per inserire il codice del giocatore - 2 per ricercare la media di una statistica"));
console.log(inputUser);
while (((isNaN(inputUser)) || (inputUser > 2) || (inputUser < 0))){
  alert("Hai inserito un valore errato! Inseriscilo di nuovo!");
  inputUser = parseInt(prompt("Cosa vuoi fare? Inserisci 0 per terminare il programma - 1 per inserire il codice del giocatore - 2 per ricercare la media di una statistica"));
}
//Gestisco il caso in cui l'utente scelga di inserire il codice del giocatore
debugger;
if(inputUser == 1){
  var playerCode = prompt("Inserisci il codice del giocatore che vuoi ricercare:");
  var isFound = isFoundCode(nomiGiocatori, playerCode);
  while(isFound[0] == false){
    alert("Hai inserito un codice errato o inesistente. Il codice è nel formato XXX000 (tre lettere maiuscole e tre numeri)");
    playerCode = prompt("Inserisci il codice del giocatore che vuoi ricercare:");
    isFound = isFoundCode(nomiGiocatori, playerCode);
  }
  document.write("Ecco le statistiche del giocatore ricercato: <br>"
                 + "codice giocatore: " + nomiGiocatori[isFound[1]].codice_Giocatore
                 + "<br>" + "punti segnati: " + nomiGiocatori[isFound[1]].punti_Segnati
                 + "<br>" + "numero di rimbalzi: " + nomiGiocatori[isFound[1]].num_Rimbalzi
                 + "<br>" + "falli: " + nomiGiocatori[isFound[1]].falli
                 + "<br>" + "percentuale di successo tiri da due punti: " + nomiGiocatori[isFound[1]].successo_duePunti
                 + "<br>" + "percentuale di successo tiri da tre punti: " + nomiGiocatori[isFound[1]].successo_trePunti);
}
else if(inputUser == 2){
  var statisticName = prompt("Inserisci il nome di una statistica per saperne la media tra tutti i giocatori. Puoi ricercare: \"punti_Segnati\", \"num_Rrimbalzi\", \"falli\", \"successo_duePunti\", \"successo_trePunti\"");
  var correctStatName =isCorrectStatistic(statisticName);
  while(!correctStatName){
    alert("Hai inserito una statistica inesistente o errata. Si prega di reinserirla");
    statisticName = prompt("Inserisci il nome di una statistica per saperne la media tra tutti i giocatori. Puoi ricercare: \"punti_Segnati\", \"num_Rrimbalzi\", \"falli\", \"successo_duePunti\", \"successo_trePunti\"");
    var correctStatName =isCorrectStatistic(statisticName);
  }
  var mediaStatistica = 0;
  for (var i = 0; i < nomiGiocatori.length; i++) {
    mediaStatistica += nomiGiocatori[i][statisticName];
  }
  document.write("La media della statistica " + statisticName + " è: " + (mediaStatistica / nomiGiocatori.length));
}

//FUNZIONI
function creaCodice(){
  var codPlayer = "";
  var casualNumber = "";
  for (var i = 0; i < 3; i++) {
    //Genero una lettera casuale maiuscola prendendo i valori dall'unicode
    var casualLetter = String.fromCharCode(Math.floor((Math.random()*(90 - 65 + 1) + 65)));
    codPlayer += casualLetter;
  }
  for (var i = 0; i < 3; i++) {
    casualNumber = Math.floor((Math.random() * 9) + 1);
    codPlayer += casualNumber;
  }
  return codPlayer;
}

function isFoundCode(arrGiocatori, codGiocatore){
  //Ho creato un array perché oltre al vero e al falso devo vedere in quale posizione si trova il giocatore trovato
  var isCodeFound = [false , -1];
  var index = 0;
  while((isCodeFound[0] == false) && (index < arrGiocatori.length)){
    if(arrGiocatori[index].codice_Giocatore == codGiocatore){
      isCodeFound = [true, index];
      return isCodeFound;
    }
    index++;
  }
  if(isCodeFound[0] == false){
    return isCodeFound;
  }
}

function isCorrectStatistic(nameOfStat){
  var listOfStatistics = ["punti_Segnati", "num_Rimbalzi", "falli", "successo_duePunti", "successo_trePunti"];
  if(listOfStatistics.includes(nameOfStat)){
    return true;
  }
  else{
    return false;
  }
}
