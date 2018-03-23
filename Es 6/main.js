var invitedPeoples = ["Frank Castle", "Penelope Cruz", "Josh Chang", "Rita Pavone", "Carl boh"];
var userName = prompt("Inserisci nome e cognome");
if(invitedPeoples.includes(userName)){
  alert("Risulti in lista. Puoi entrare!");
}
else{
  alert("Non sei in lista! Vattene o chiamo la sicurezza!");
}
