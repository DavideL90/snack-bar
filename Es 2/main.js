var word1 = prompt("Inserisci una parola");
var word2 = prompt("Inserisci un'altra parola");
if(word1.length < word2.length){
  document.write("La parola più corta è: " + word1 + " quella più lunga è: " + word2);
}
else if(word1.length > word2.length){
  document.write("La parola più corta è: " + word2 + " quella più lunga è: " + word1);

}
else{
  document.write("La  prima parola: " + word1 + " è lunga quanto la seconda " + word2);

}
