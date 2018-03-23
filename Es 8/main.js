var names = ["Frank", "Penelope", "Josh", "Rita", "Carl", "Allison"];
var surnames = ["Castle", "Cruz", "Chang", "Pavone", "Boh" , "Annigan"];
var fakeList = [];
for (var i = 0; i < names.length; i++) {
  var randomName = Math.floor(Math.random() * names.length);
  var randomSurname = Math.floor(Math.random() * surnames.length);
  var fakeNameSur = names[randomName] + " " + surnames[randomSurname];
  fakeList.push(fakeNameSur);
}
console.log(fakeList);
