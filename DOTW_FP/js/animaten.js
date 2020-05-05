$(document).ready(function(){


    let s = [ new Audio ("audio/ctrim.wav"), new Audio ("audio/dtrim.wav"), new Audio ("audio/etrim.wav") ];
    let s2 = [ new Audio ("audio/gtrim.wav")];

    let click = document.getElementById('a');
    let click2 = document.getElementById('b');
    let click3 = document.getElementById('c');
    let click4 = document.getElementById('d');
    
     click.addEventListener("click", sound);
     click2.addEventListener("click", sound2);
     click3.addEventListener("click",sound3);
     click4.addEventListener("click", sound4);


    function sound(){
            let go = s[0]; 
            go.play(); 
             

    };

    function sound2(){
           let go2 = s[1];
            go2.play();
    };

    function sound3(){
        let go3 = s[2];
            go3.play();
    }

    function sound4(){
        let go4 = s2[0];
            go4.play();
    }


});