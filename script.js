function enterSite(){
document.getElementById("overlay").style.display="none";
}

var countDownDate = new Date("March 22, 2026 00:00:00").getTime();

setInterval(function() {

var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + " Days ✨ " + hours + " Hours ✨ "
+ minutes + " Minutes ✨ " + seconds + " Seconds ";

}, 1000);