var invitedPeoples = ["Frank Castle", "Penelope Cruz", "Josh Chang", "Rita Pavone", "Carl boh", "Allison Annigan"];
var menNames = ["Frank", "John", "Josh", "Brad", "Carl"];
var womenNames = ["Penelope", "Rita", "Allison", "Rebecca"];
var countMen = 0;
var countWomen = 0;
var percMen = 0;
var percWomen = 0;
for (var i = 0; i < invitedPeoples.length; i++) {
  var name = invitedPeoples[i];
  var arrName = name.split(" ");
  if(menNames.includes(arrName[0])){
    countMen++;
  }
  else{
    countWomen++;
  }
}
percMen = (countMen * 100) / invitedPeoples.length;
percWomen = (countWomen * 100) / invitedPeoples.length;
document.write("Gli invitati totali sono: " + invitedPeoples.length + ". La percentuale di uomini è del: " + percMen + "%. Numero di invitati uomini:  " + countMen +  ". Quella delle donne invece è: " + percWomen + "%. Numero di invitati donne: " + countWomen);
console.log(countMen);
console.log(percMen);
console.log(countWomen);
