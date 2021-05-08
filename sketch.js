//Create variables here
//var dog, happyDog, database, foodS, foodStock
var dogImg,happyDogImg,dogSprite,happyDogSprite

var dog, happyDog, database, foodS, foodStock

var button1,button2,foodObj,lastFed

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000,500);

  database=firebase.database();

  dogSprite=createSprite(800, 200, 10,10);
	dogSprite.addImage(dogImg)
	dogSprite.scale=0.4


 
 button1 = createButton("Feed the dog")
 button1.position(100,20)

 button2 = createButton("Add Food")
 button2.position(200,20)

foodObj = new Food()

var foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}

function addFood(){ 
  database.ref('/').update({
    Food:foodStock+1
  })
}

function feedtheDog() {
  database.ref('/').update({
    Food:foodStock-1
      })
  lastFed = hour()
  database.ref("/").update(
  {lastFed:lastFed}
  )

  dogSprite.addImage(happyDogImg)
}

function readStock(data){

  foodStock=data.val()
  
}

function draw() {  

background(46, 139, 87)


button1.mousePressed(feedtheDog)
  

button2.mousePressed(addFood)
 

  drawSprites();
  //add styles here
    text()
  fill("red")
  text("Note: Press UP_ARROW key to Feed Drago Milk",20,35); 
  fill("red")
  text("food left :"+foodStock,200,100); 
 
  foodObj.display()

  
}



