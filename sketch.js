var dog,dogImg;
var happyDog,happyDogImg;
var database;
var foodS;
var foodStock;
var fedTime;
var lastFed;
var feed;
var addFood;
var foodObj;

function preload()
{
  dogImg=loadImage("images/dog.png");
  happyDogImg=loadImage("images/Happy.png");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImg);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  
  addFood=createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed("addFoods");
   
  var foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}
  Food.display();
  drawSprites();
  text("Foodremaining:",30,30)
  fill("white")
  stroke("black");
  textSize(5)
  fill("white");
  stroke("black")
  textSize(5);
fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed :"+ lastFed%12 + "PM",350,30);
}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
}else {
  text("Last Feed : "+lastFEd + "AM",350,30);
}
}


function readStock(data){
  foodS.data.val();
}
function writeStocks(){
  if(x<=0){
    x=0;
  }else{
    x=x+1;
  }
  
  database.ref('/').update({
    food:x
  })
}
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}


