var totale = 0;
// for (var i = 0; i < 5; i++) {
//   var number = parseInt(prompt("Inserisci un numero"));
//   totale += number;
// }
// console.log(totale);

var count = 0;
do{
  var number = parseInt(prompt("Inserisci un numero"));
  totale += number;
  count++;
}while(count < 5);
console.log(totale);
