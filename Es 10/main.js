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
var film6 = {
  "titolo" : "Il curioso caso di Benjamin Button",
  "attori" : ["Brad Pitt ", "Kate Blanchett", "Julia Ormond"],
  "durata" : 166,
  "voti" : [3.9, 4.6, 1.9, 2.4],
  "genere" : "drammatico"
}
var arrayFilms = [film1, film2, film3, film4, film5];

var durataMedia = durataMedia(arrayFilms);
var longMovies = longMovies(arrayFilms);
var arrBrangelinaMovies = brangelinaVotes(arrayFilms);
var votesForGenre = mediaGenre(arrayFilms);
document.write("La durata media dei film è: " + durataMedia + "<br>");
document.write("Ecco l'elenco dei film che durano più di 180 minuti: " + longMovies + "<br>");
document.write("Brad e Angelina hanno recitato nei seguenti film con la seguente media dei voti: " + arrBrangelinaMovies + "<br>");
document.write("Media dei voti ai film in base al genere: " + votesForGenre);

function durataMedia(arrFilms){
  var mediumTime = 0
  for (var i = 0; i < arrFilms.length; i++) {
    mediumTime += arrFilms[i].durata;
  }
  return mediumTime/arrFilms.length;
}

function longMovies(arrFilms){
  var arrLongMovies = [];
  for (var i = 0; i < arrFilms.length; i++) {
    if(arrFilms[i].durata > 180){
      arrLongMovies.push(arrFilms[i].titolo);
    }
  }
  return arrLongMovies;
}

function brangelinaVotes(arrFilms){
  var mediaBrangelina = 0;
  var arrayBrangelina = [];
  for (var i = 0; i < arrFilms.length; i++) {
    if((arrFilms[i].attori.includes("Brad Pitt")) && (arrFilms[i].attori.includes("Angelina Jolie"))){
      for (var x = 0; x < arrFilms[i].voti.length; x++) {
        mediaBrangelina += arrayFilms[i].voti[x];
      }
      var titoloFilm = arrFilms[i].titolo;
      var mediaVoto = mediaBrangelina / arrFilms[i].voti.length;
      arrayBrangelina.push(" " + titoloFilm + " = " + Math.round(mediaVoto));
    }
    mediaBrangelina = 0;
  }
  return arrayBrangelina;
}

function mediaGenre(arrFilms){
  var arrayGeneri = ["fantasy", "drammatico", "azione", "romantico", "thriller"]; //array per fare la media in base al genere
  var arrayResult = [];
  for (var i = 0; i < arrayGeneri.length; i++) {
    var mediaGeneri = 0;
    var mediaSingola = 0 //ci salvo la media dei voti dei singoli film
    var numberOfFilmGenre = 0; //Indica quanti film di quel genere ci sono
    for (var x = 0; x < arrFilms.length; x++) {
      //Non uso includes perché mi darebbe vero anche se il genere è diverso
      if(arrayGeneri[i] == arrFilms[x].genere){
        //faccio un ciclo per fare la media per ogni film. Poi le sommo tra di loro e divido per il numero di film
        var count = 0;
        for (var y = 0; y < arrFilms[x].voti.length; y++) {
          count += arrFilms[x].voti[y];
        }
        numberOfFilmGenre++
        mediaSingola = count / arrFilms[x].voti.length;
        mediaGeneri += mediaSingola;
      }
    }
    if(mediaGeneri != 0){
      mediaGeneri /= numberOfFilmGenre;
    }
    arrayResult.push(" " + arrayGeneri[i] + " = " + Math.round(mediaGeneri));
  }
  return arrayResult;
}
