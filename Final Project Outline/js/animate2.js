	const canvas = document.querySelector('canvas');
	const context = canvas.getContext('2d');


      let width;
      let height;

  
      let pxScale = window.devicePixelRatio;

      function setup() {
        
        width = canvas.width;
        height = canvas.height;

        //canvas [0] w and h
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        //canvas [0] pxscale
        canvas.width = width * pxScale;
        canvas.height = height * pxScale;

        context.scale(pxScale, pxScale);
        

        body();
        fins();
        tail();

       /* eye();*/


}


function tail(){

	/* Back */
	

    context.beginPath();
    context.rect(150, 230, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(150, 270, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(150, 310, 35, 35);
    context.fill();
    context.stroke();


    /* Middle: Level 1 */

   	context.beginPath();
    context.rect(110, 170, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(110, 210, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(110, 250, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(110, 290, 35, 35);
    context.fill();
    context.stroke();

    /*context.beginPath();
    context.rect(110, 330, 35, 35);
    context.fill();
    context.stroke();*/

    context.beginPath();
    context.rect(110, 370, 35, 35);
    context.fill();
    context.stroke();


  /* Middle: Level 2 */
    context.beginPath();
    context.rect(70, 140, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(70, 180, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(70, 220, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(70, 260, 35, 35);
    context.fill();
    context.stroke();

    /*context.beginPath();
    context.rect(70, 300, 35, 35);
    context.fill();
    context.stroke();*/

    context.beginPath();
    context.rect(70, 340, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(70, 380, 35, 35);
    context.fill();
    context.stroke();



    /*Front*/

    context.beginPath();
    context.rect(30, 110, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(30, 150, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(30, 190, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(30, 230, 35, 35);
    context.fill();
    context.stroke();

    /*context.beginPath();
    context.rect(30, 270, 35, 35);
    context.fill();
    context.stroke();*/

    context.beginPath();
    context.rect(30, 310, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(30, 350, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(30, 390, 35, 35);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(30, 430, 35, 35);
    context.fill();
    context.stroke();


    
}


function body(){

	   /*context.beginPath();
       context.ellipse(470, 300, 150, 300, 55, 0, 2 * Math.PI);
       context.fill();
       context.stroke();*/

		/*top*/

	     context.fillStyle = "white";

	     context.beginPath();
       context.rect(240, 190, 35, 35);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(280, 160, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(350, 160, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(420, 160, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(490, 160, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(560, 170, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(630, 190, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(700, 220, 65, 65);
       context.fill();
       context.stroke();

    

       /*Middle: Level 1*/

       context.beginPath();
       context.rect(190, 230, 55, 60);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(250, 230, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(320, 230, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(390, 230, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(460, 230, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(530, 240, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(600, 260, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(670, 290, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(740, 290, 30, 65);
       context.fill();
       context.stroke();

       

       /*Middle: Level 2*/

       context.beginPath();
       context.rect(190, 300, 55, 60);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(250, 300, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(320, 300, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(390, 300, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(460, 300, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(530, 310, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(600, 330, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(670, 360, 70, 50);
       context.fill();
       context.stroke();


       /*Bottom*/

       context.beginPath();
       context.rect(220, 370, 50, 30);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(280, 370, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(350, 370, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(420, 370, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(490, 380, 65, 65);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(560, 380, 30, 60);
       context.fill();
       context.stroke();

       context.beginPath();
       context.rect(600, 400, 60, 30);
       context.fill();
       context.stroke();
    

}

function eye(){
	context.beginPath();
	context.arc(820,320,20,0*Math.PI,2*Math.PI);
	context.fillStyle = "white";
	context.fill();
	context.stroke();
}

/*fins*/
function fins(){

	/*top fin */

    context.beginPath();
    context.rect(580, 130, 30, 40);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(550, 100, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(515, 100, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(480, 100, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(450, 70, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(430, 40, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(395, 40, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(360, 40, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(330, 20, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(300, 50, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(320, 80, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(320, 80, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(340, 100, 30, 30);
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(370, 120, 30, 40);
    context.fill();
    context.stroke();

    /*bottom fin */

}





window.addEventListener('load', setup);