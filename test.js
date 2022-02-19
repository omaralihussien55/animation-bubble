let canvas = document.getElementById("canvas1");
let c = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
window.onresize = BackGround
function BackGround(){
    canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let gravit = 2;
c.beginPath();
c.fillStyle = 'black';
c.fillRect(0,0,canvas.width,canvas.height)
c.fill()
class Bubble{
    constructor(framX ,framY){
this.radus = 10;
this.x = (canvas.width-this.radus) * Math.random();
this.y = (canvas.height - this.radus) * Math.random();
this.width = canvas.width;
this.height = canvas.height;
this.velocity = {x:9*Math.random(),y:15*Math.random()}
this.color =`red`;
this.yshow = false;
this.xshow = false;

}

draw(){
 c.beginPath();
 c.fillStyle = this.color;
 c.arc(this.x,this.y,this.radus,0,2 * Math.PI)
 c.fill()
    }

 update(){
     this.draw()
this.color =`red`;
     if(this.yshow == false ){
        this.y -= this.velocity.y;
        // this.x += this.velocity.x
    }else{
        this.y += this.velocity.y;
        // this.x += this.velocity.x
    }
    
    if(this.xshow == false){
        this.x += this.velocity.x
    }else{
  
        this.x -= this.velocity.x
    }
    

}
}



let backArray = [];
let boomArray = [];
for(i=0; i <= 20 ; i++){
    backArray.push(new Bubble)
}


function init(){
  
    c.clearRect(0,0,canvas.width,canvas.height);

c.beginPath();
c.fillStyle = 'black';
c.fillRect(0,0,canvas.width,canvas.height)
c.fill()
 
backArray.forEach((back,indexback)=>{
    back.update()
let color = `rgb(${Math.random()* 320}, ${Math.random()* 200}, ${Math.random()* 290})`
 back.color = color
    if(back.y <= back.radus ){
        back.yshow = true
    }else if(back.y == canvas.height - back.radus){
        back.yshow = false
    }else if(back.x >= canvas.width-back.radus){
       back.xshow = true
    }else if(back.y >= canvas.height-back.radus){
        back.yshow = false;
     }else if(back.x <= back.radus){
        back.xshow = false;
     }
})

boomArray.forEach((boom)=>{
    boom.update()
})

requestAnimationFrame(init); 

}
init()

}
BackGround()


