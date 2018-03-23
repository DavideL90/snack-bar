var birthDate = new Date("July 14, 1990 20:30"); //Creo un oggetto con la mia data di compleanno
var currentDate = new Date(); //Ottengo la data odierna
var difference = (currentDate.getTime() - birthDate.getTime() / 1000); //Ottengo i millisecondi trascorsi dal 1 gen 1970 e faccio la differenza tra i due valori
//divido per 1000 perché sono millisecondi e voglio i secondi.
document.write("Sono trascorsi: " + difference + " secondi dalla data della tua nascita");
