var birthday = new Date("July 14, 2018");
var currentDate = new Date();
var difference = (birthday.getTime() + currentDate.getTime()) / 1000;
var countdown = setInterval(happyBirthday, 1000);

function happyBirthday(){
  console.log(difference);
  difference--
  if(difference == -1){
    alert("Happy Birthday!!!");
    clearInterval(countdown);
  }
}
