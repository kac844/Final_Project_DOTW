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
       
        
        waves();
        


};


let color = 0;

function waves(){

   
    context.clearRect(0, 0, width, height);
    
    context.fillStyle = 'hsla(' + color + ', 100%, 50%, 0.8)';

        if (color >= 285) {
            color = 0;
        }
            color += 0.5;

        
    context.globalCompositeOperation = 'difference';


    context.shadowColor = "black";
    context.shadowBlur = 50;

    
    let rec = new Path2D();
    rec.rect(300, 200, 150, 100);
    rec.rect(300, 50, 100, 100);
    rec.rect(450,50,100,200);

    rec.rect(0,0,400,400);
    rec.rect(550,100,250,200);
    
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 300);
    context.lineTo(300, 300);
    context.closePath();

    let tri = new Path2D();
    tri.moveTo(400,200);
    tri.lineTo(100,300);
    tri.lineTo(100,200);

    tri.moveTo(0,10);
    tri.lineTo(450,350);
    tri.lineTo(300,45);

    tri.moveTo(500,500);
    tri.lineTo(500,200);
    tri.lineTo(500,300);  

    tri.moveTo(300,300);
    tri.lineTo(400,500);
    tri.lineTo(500,300); 

    tri.moveTo(600,600);
    tri.lineTo(600,300);
    tri.lineTo(300,400);  

    tri.moveTo(50,50);
    tri.lineTo(100,300);
    tri.lineTo(300,600); 




    rec.rect(0, 400, 50, 50);
    rec.arc(100, 75, 50, 0, 2 * Math.PI);
    
    rec.rect(0, 400, 50, 30);
    rec.rect(40,420,50,30);
    rec.rect(80,440,50,30);
    rec.rect(120,460,50,30);
    rec.rect(175,460,50,30);
    rec.rect(220,440,50,30);
    rec.rect(260,420,50,30);
    rec.rect(310,400,50,30);
    rec.rect(360,420,50,30);
    rec.rect(410,440,50,30);
    rec.rect(460,460,50,30);
    rec.rect(515, 460, 50, 30);
    rec.rect(550, 440, 50, 30);
    rec.rect(590, 420, 50, 30);
    rec.rect(640, 400, 50, 30);
    rec.rect(690, 420, 50, 30);
    rec.rect(720, 440, 50, 30);

    
    rec.rect(0, 500, 50, 30);
    rec.rect(40, 520, 50, 30);
    rec.rect(80, 540, 50, 30);
    rec.rect(120, 560, 50, 30);
    rec.rect(175, 560, 50, 30);
    
    rec.rect(220, 540, 50, 30);
    rec.rect(260, 520, 50, 30);
    rec.rect(310, 500, 50, 30);
    rec.rect(360, 520, 50, 30);
    rec.rect(410, 540, 50, 30);

    rec.rect(460, 560, 50, 30);
    rec.rect(515, 560, 50, 30);
    rec.rect(550, 540, 50, 30);
    rec.rect(590, 520, 50, 30);
    rec.rect(640, 500, 50, 30);
    rec.rect(690, 520, 50, 30);
    rec.rect(720, 540, 50, 30);

    context.beginPath();
    context.arc(100, 0, 50, 0, 2 * Math.PI);
    context.arc(600, 0, 50, 0, 2 * Math.PI);
    context.arc(100, 600, 50, 0, 2 * Math.PI);
    context.arc(600, 600, 50, 0, 2 * Math.PI);
    context.arc(400, 200, 100, 0, 2 * Math.PI);
    context.arc(590, 330, 200, 0, 2 * Math.PI);
    context.save();


    context.fill(tri);
    context.fill(rec);
    context.fill();

    let box = new Path2D();
    box.rect(600,0,400,600);
    box.closePath();

    context.fillStyle = 'black';

    context.fill(box);
    

    context.restore();


    requestAnimationFrame(waves);

   sun();


    
    
};

const bckg = document.getElementById('cloud');

function sun(){


context.beginPath();
context.arc(370,335,300,Math.PI, 0);
context.fillStyle = '#ffcc00';
context.fill();
context.stroke();


context.drawImage(bckg, 0, 0, 800, 600);//352

}



 window.addEventListener('load', setup);
