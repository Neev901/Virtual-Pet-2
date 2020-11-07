//Create variables here
var dog_sprite, dog, happyDog, DB, foodS;
var foodObj;
var foodStock;
var h, r, c;
var pet_name_input, pet_name_btn, instruct;
var Name, dog_new_pos_x, dog_new_pos_y;
var pet_name = "";

var add_food, feed_food;
var fedTime, lastFed;

const database = firebase.database();
const FoodStock = database.ref('Food_Stock');
const LastFed = database.ref('Feed_Time');

function preload() {
  //load images here
  dog = loadImage("./images/dogImg.png")
  happyDog = loadImage("./images/dogImg1.png")
}

function setup() {
  createCanvas(900, 500);
  Name = createElement("h1")
  instruct = createElement("h4")
  instruct.html("Enter Pet Name")
  instruct.position(1100, 285)
  pet_name_btn = createButton("Add Name")
  pet_name_btn.position(1117, 355)
  pet_name_input = createInput()
  pet_name_input.position(1070, 325)
  add_food = createButton("Add Food");
  add_food.position(displayWidth / 3 + 50, 55);
  feed_food = createButton("Feed Pet");
  feed_food.position(displayWidth / 3 + 150, 55)
  dog_sprite = createSprite(650, 250, 50, 50);
  dog_sprite.addImage("normal_dog", dog);
  dog_sprite.addImage("Happy_dog", happyDog);
  dog_sprite.visible = true;
  dog_sprite.scale = 0.3;
  foodObj = new Food();
}


function draw() {
  background(46, 139, 87);
  foodObj.getFoodStock();
  foodObj.display();
  feed_food.mousePressed(foodObj.deductFoodStock);
  add_food.mousePressed(foodObj.addFood);


  drawSprites();
  fill(rgb(128, 0, 0));
  textSize(20);
  text("Instructions:", 510, 400)
  text("Instructions:", 510, 400)
  text("Instructions:", 510, 400)
  textSize(15)
  fill("blue");
  text("* Enter pet name", 520, 420)
  text("* Click \"Add Food\" button to add milk", 520, 440)
  text("* Click \"Feed Pet\" button to feed " + pet_name, 520, 460)
  fill(255, 255, 255);
  textSize(48);
  if (h >= 12) {
    text("Last Fed : " + h % 12 + " PM", 275, 75);
  }
  else if (h === 0) {
    text("Last Fed : 12 AM", 275, 75)
  }
  else if (h < 12) {
    text("Last Fed : " + h + " AM", 275, 75)
  }
  pet_name_btn.mousePressed(() => {
    instruct.hide()
    pet_name_input.hide()
    pet_name_btn.hide()
    pet_name = pet_name_input.value();
    Name.html(pet_name)
    Name.position(965, 385)
  })
}


