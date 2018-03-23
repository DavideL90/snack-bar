alert("Inizia il gioco!");
var computerScore = 0;
var playerScore = 0;
var conversionValues = ["sasso", "carta", "forbici"]; //Array per convertire i valori del pc
//Creo un ciclo per simulare le tre giocate
for (var i = 0; i < 3; i++) {
  var computerGame = Math.floor((Math.random() * 3)); //Genero un numero casuale da 1 a 3 a cui far corrispondere sasso carta e forbici
  console.log(computerGame);
  console.log(conversionValues[computerGame]);
  var playerGame = prompt("Srivi sasso, carta o forbici, per indicare valore scelto");
  //Utilizzo una funzione per controllare che il valore immesso dall'utente sia valido
  while(!isCorrectValue(playerGame)){
    playerGame = prompt("Srivi sasso, carta o forbici, per indicare valore scelto");
  }
  console.log(playerGame);
  //Controllo chi vince il singolo round
  if(conversionValues[computerGame] != playerGame){
    var whoWon = whoWin(conversionValues, computerGame, playerGame); //variabile per sapere chi ha vinto il round tramite la funzione;
    if( whoWon == "player"){
      playerScore++;
      alert("Vince il round il giocatore con: " + playerGame + " il computer aveva " + conversionValues[computerGame]);
      console.log(playerScore);
    }
    else{
      computerScore++
      alert("Vince il round il computer con: " + conversionValues[computerGame] + " il giocatore aveva " + playerGame);
      console.log(computerScore);
    }
  }
  else{
    alert("Pareggio!")
  }
}
if(playerScore > computerScore){
  document.write("Vince la partita il giocatore con " + playerScore + " punti");
}
else if(playerScore < computerScore){
  document.write("Vince la partita il computer con " + computerScore + "punti");
}
else{
  document.write("La partita è pareggiata! Il giocatore ha totalizzato: " + playerScore + " ed il computer: " + computerScore);
}


function isCorrectValue(playerChoose){
  if((playerChoose == "sasso") || (playerChoose == "carta") || (playerChoose == "forbici")){
    return true;
  }
  else{
    alert("Hai inserito un valore errato! Reinseriscilo");
    return false;
  }
}

function whoWin(arrConversion, compPlay, userPlay){
  if(((arrConversion[compPlay] == "sasso") && (userPlay == "carta")) || ((arrConversion[compPlay] == "carta") && (userPlay == "forbici")) || ((arrConversion[compPlay] == "forbici") && (userPlay == "sasso"))){
    return "player";
  }
  else if(((arrConversion[compPlay] == "sasso") && (userPlay == "forbici")) || ((arrConversion[compPlay] == "carta") && (userPlay == "sasso")) || ((arrConversion[compPlay] == "forbici") && (userPlay == "carta"))){
    return "computer";
  }
}
