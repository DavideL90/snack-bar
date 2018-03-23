var film1 = {
  "titolo" : "Mr. & Mrs. Smith",
  "attori" : ["Brad Pitt", "Angelina Jolie"],
  "durata" : 120,
  "voti" : [4, 3, 5, 3.2, 2.9],
  "genere" : "azione"
}
var film2 = {
  "titolo" : "By the Sea",
  "attori" : ["Brad Pitt", "Angelina Jolie"],
  "durata" : 132,
  "voti" : [5, 1.7, 3.2, 4],
  "genere" : "drammatico"
}
var film3 = {
  "titolo" : "Harry Potter e il calice di fuoco",
  "attori" : ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
  "durata" : 147,
  "voti" : [4.7, 5, 3.3, 5],
  "genere" : "fantasy"
}
var film4 = {
  "titolo" : "Gone girl",
  "attori" : ["Ben Affleck", "Rosamund Pike"],
  "durata" : 149,
  "voti" : [5, 3.9, 4.8, 5],
  "genere" : "thriller"
}
var film5 = {
  "titolo" : "Il signore degli anelli - La compagnia dell'anello",
  "attori" : ["Elijah Wood ", "Ian McKellen", "Sean Austin", "Viggo Mortensen"],
  "durata" : 228,
  "voti" : [5, 4.7, 4.8, 5],
  "genere" : "fantasy"
}
var film6 ={
  "titolo" : "Il curioso caso di Benjamin Button",
  "attori" : ["Brad Pitt ", "Kate Blanchett", "Julia Ormond"],
  "durata" : 166,
  "voti" : [3.9, 4.6, 1.9, 2.4],
  "genere" : "drammatico"
}
var arrayFilms = [film1, film2, film3, film4, film5];
var durataMedia = 0;
var arrayLongFilms = [];
var mediaBrangelina = 0 //Per calcolare la media dei film in cui hanno recitato i due attori
var arrayGeneri = ["fantasy", "drammatico", "azione", "romantico", "thriller"]; //array per fare la media in base al genere

//faccio un ciclo per calcolare la media della durata dei film e se ci sono film che durano più di 180 minuti
for (var i = 0; i < arrayFilms.length; i++) {
  durataMedia += arrayFilms[i].durata;
  if(arrayFilms[i].durata > 180){
    arrayLongFilms.push(arrayFilms[i].titolo);
  }
}
document.write("La durata media dei film è: " + (durataMedia / arrayFilms.length) + "<br>");
document.write("Ecco l'elenco dei film che durano più di 180 minuti: " + arrayLongFilms + "<br>");

//faccio un ciclo per calcolare la media dei film in cui hanno recitato Brad e Angelina e per calcolare la media in base al genere
for (var i = 0; i < arrayFilms.length; i++) {
  if((arrayFilms[i].attori.includes("Brad Pitt")) && (arrayFilms[i].attori.includes("Angelina Jolie"))){
    for (var x = 0; x < arrayFilms[i].voti.length; x++) {
      mediaBrangelina += arrayFilms[i].voti[x];
    }
    document.write("Brad e Angelina hanno recitato insieme in: " + arrayFilms[i].titolo + ". Il film ha ricevuto una media di: " + Math.round(mediaBrangelina / arrayFilms[i].voti.length) + "<br>");
  }
  mediaBrangelina = 0;
}

//faccio un ciclo per calcolare la media in base al genere
for (var i = 0; i < arrayGeneri.length; i++) {
  var mediaGeneri = 0;
  var mediaSingola = 0 //ci salvo la media dei voti dei singoli film
  var numberOfFilmGenre = 0; //Indica quanti film di quel genere ci sono
  for (var x = 0; x < arrayFilms.length; x++) {
    //Non uso includes perché mi darebbe vero anche se il genere è diverso
    if(arrayGeneri[i] == arrayFilms[x].genere){
      //faccio un ciclo per fare la media per ogni film. Poi le sommo tra di loro e divido per il numero di film
      var count = 0;
      for (var y = 0; y < arrayFilms[x].voti.length; y++) {
        count += arrayFilms[x].voti[y];
      }
      numberOfFilmGenre++
      mediaSingola = count / arrayFilms[x].voti.length;
      mediaGeneri += mediaSingola;
    }
  }
  if(mediaGeneri != 0){
    mediaGeneri /= numberOfFilmGenre;
  }
  document.write("La media dei voti per i film di genere " + arrayGeneri[i] + " è uguale a: " + Math.round(mediaGeneri) + "<br>");
}
