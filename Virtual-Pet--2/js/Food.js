class Food {
  constructor() {
    this.lastFed;
    this.image = loadImage("./images/Milk.png")
  }

  getFoodStock() {
    FoodStock.on('value', (value) => {
      foodStock = value.val();
    })
    LastFed.on('value', (value) => {
      h = value.val();
    })
  }

  addFood() {
    if(pet_name==""){
      window.alert("Enter pet name first")
    }
    else{
    if (foodStock < 30) {
      foodStock = foodStock + 1;
      database.ref().update({
        Food_Stock: foodStock
      })
    }
    else {
      window.alert("Cannot Add food more than 30")
    }
  }
  }

  deductFoodStock() {
    if(pet_name==""){
      window.alert("Enter pet name first")
    }
    else{
    if (foodStock != 0) {
      if((foodStock/10)%1!=0){
      for (let i = 1; i <= foodStock / 10 + 1; i++) {
        if (foodStock / 10 <= i) {
          r = i;
          c = foodStock % 10;
          if (c != 0) {
            dog_new_pos_x = 80 + (c * 45)
          }
          else {
            dog_new_pos_x = 530
          }
          dog_new_pos_y = r * 100 + 100;
          dog_sprite.x = dog_new_pos_x;
          dog_sprite.y = dog_new_pos_y;
          setTimeout(function(){
            dog_sprite.x =650;
            dog_sprite.y =250;
          },2000);
          if (foodStock == 0) {
            dog_sprite.x = 650;
            dog_sprite.y = 250;
          }
        }
      }
    }
    else{
      r= foodStock/10;
      dog_new_pos_y = r * 100 + 100;
      dog_new_pos_x = 530
      dog_sprite.x = dog_new_pos_x;
      dog_sprite.y = dog_new_pos_y;
      setTimeout(function(){
        dog_sprite.x =650;
        dog_sprite.y =250;
      },2000)
    }
      h = hour();
      foodStock = foodStock - 1;
      database.ref().update({
        Food_Stock: foodStock
      })
      database.ref().update({
        Feed_Time: h
      })
      dog_sprite.changeImage("Happy_dog");
      setTimeout(function(){
        dog_sprite.changeImage("normal_dog");
      },2000)
    }
    else{
      window.alert("Food is over, click add food to add")
    }
  }
  }

  display() {
    var x = 80;
    var y = 100;

    imageMode(CENTER);

    if (foodStock != 0) {
      for (var i = 0; i < foodStock; i++) {
        if (i % 10 === 0) {
          x = 80;
          y = y + 100;
        }
        image(this.image, x, y, 75, 75);
        x = x + 45;
      }
    }
  }
}