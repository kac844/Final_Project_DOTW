
$(document).ready(function(){

let s = [ new Audio ("audio/a1.mp3"), new Audio ("audio/a2.mp3"),new Audio ("audio/a3.mp3")];
let solo = [new Audio ("audio/a4.mp3")];

$('.flame-wrapper').click(function (){
    s[0].play();
    s[1].play();
    s[2].play();
    solo[0].play();

});

$('.flame-wrapper2').click(function(){
    s[0].pause();
    s[1].pause();
    s[2].pause();
    solo[0].pause();

}); 




});