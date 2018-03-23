var n = parseInt(prompt("Inserisci un numero"));
var arrayListNames = []; //array per contenere la lista dei nomi
var count = 0; //Per sommare ogni array
var maxSum = 0; //Per memorizzare chi ha la somma più alta
var index;
//genero nomi array
for (var i = 0; i < n; i++) {
  arrayListNames.push("array" + (i + 1));
  arrayListNames[i] = [];
}

//riempio gli array
for (var i = 0; i < arrayListNames.length; i++) {
  for (var x = 0; x < 10; x++) {
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    arrayListNames[i].push(randomNumber);
  }
}
console.log(arrayListNames);

//Faccio la somma degli elementi dell'array
for (var i = 0; i < arrayListNames.length; i++) {
  for (var x = 0; x < arrayListNames[i].length; x++) {
    count += arrayListNames[i][x];
  }
  console.log(arrayListNames[i]);
  console.log(count);
  if(maxSum < count){
    maxSum = count;
    index = i;
  }
  count = 0;
}
document.write("L'array i cui elementi danno la somma maggiore è: " + arrayListNames[index] + ". La somma dei suoi elementi è: " + maxSum);
console.log(maxSum);
console.log(arrayListNames[index]);
