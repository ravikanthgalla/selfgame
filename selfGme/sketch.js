var playerCar,computerCar,road,roadImg
var carimg,taxiimg1,taxiimg2
var taxi,taxiGrp
var coinImage,coinsGroup
var coinSound,carCrash,startSound,raceSound,
function preload(){
  roadImg=loadImage("car game.jpg")
  carimg=loadImage("car new.jpeg")
  taxiimg1=loadImage("car new 2.jpeg")
  taxiimg2=loadImage("cae new 3.jpeg")
  coinImage=loadImage("coin.png")
  coinSound=loadSound("coin sound.ogg")
  startSound=loadSound("car start.wav")
  raceSound=loadSound("car race.wav")
  carCrash=loadSound("car crash.wav")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
    road=createSprite(width/2,displayHeight/2)
  road.addImage(roadImg)
  road.scale=2
  raceSound.loop()

     /*startgame = createSprite(width/2,displayHeight/2);
     startgame.addImage(stateimg)
      startgame.visible = false;
    
    start = createSprite(width/2,height/1.15,40,20);
    start.addImage(startimg)
    start.scale = 0.15;
    
    over = createSprite(width/2,height/10,20,20);
    over.visible = false;
    over.addImage(resetimg);
    over.scale = 0.7*/
    
    
    
    playerCar = createSprite(displayWidth/2.1,displayHeight/1.1,10,10);
    playerCar.addImage(carimg);
    playerCar.scale = 0.150;
  
    taxiGrp = new Group();
    coinGroup = new Group();
    
    GAMESTATE = 3;
    PAUSESTATE = 2;
    PLAY = 1
    END = 0;
    STARTSTATE = 3;
  
    over.depth = car100.depth + 1;
    over.depth = cargroup.depth;
    over.depth = over.depth + 1;
      
  }



function draw() {
  background(255,255,255);  
  drawSprites();
  road.velocitY=-3
  spawnTaxi()
  spawnCoins()
  if (taxiGrp.isTouching(playerCar)){
    carCrash.play()
  }
  if(coinsGroup.isTouching(playerCar)){
    coinSound.play()
    coinsGroup.destroyEach()
  }
}
   function spawnTaxi(){
     if (frameCount%150===0){
       var rand=Math.random(width/2-200,width/2+200)
      taxi=createSprite(rand,height-50)
      taxi.velocityY=-3;
      taxi.depth=road.depth+1
      var img=Math.round(random(1,2))
      switch(img){
        case 1:taxi.addImage(taxiimg1);
        break;
        case 2:taxi.addImage(taxiimg2);
        break;
        default:break;
      }
      taxiGrp.add(taxi)
     }
   } 

   function spawnCoins(){
     if(frameCount%100===0){
    coin = createSprite(width/2,0)
    coin.velocitY=3
    coin.lifetime=200;
    coin.addImage(coinImage)
    coinsGroup.add(coin)
    coin.scale=0.5
     }
   }
  
