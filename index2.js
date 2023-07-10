const playerShip=document.querySelector("#playerShip > img");
const playerShipHull=document.getElementById("playerShipHull");
const NUM_ALIEN_SHIPS=[];
const aliens=document.querySelector("#aliens > img");
const alienShipHull=document.getElementById("AlienShipHull");

const attackBtn=document.getElementById("attackBtn");
const backgroundMusic=document.getElementById("bacgroundmusic");

backgroundMusic.volume=0.2;

/* creating a ship class for player's ship*/
class Ship{
    constructor(hull,firepower,accuracy){
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
    }
} 

// attack(enemy) {
//     if (Math.random()<this.accuracy){
//         enemy.hull-=this.firepower;
//         const firingMusic= new Audio("music/8-bit-laser.wav");
//         firingMusic.play();
//     }
// }
let maverick = new Ship (20, 5, 0.7,0.5);
 maverick = new Ship(20, 5, 0.7, 0.8);
console.log(maverick);
maverick.attacking = true;

class Aliens{
 constructor(){
    this.ships=[];
 }
 addAlien(){
    //enemy hull is between 3 and 6
    this.hull=Math.round(Math.random()*(6-3)+3);
    // enemy firepower is between 2 and 4
    this.firepower=Math.round(Math.random()*(4-2)+3);
    // enemy accuracy is between .6 and .8
    this.accuracy=(Math.random()*(.6-.8)+.8).toFixed(1);
    let newAlienShip=new Ship(this.hull,this.firepower,this.accuracy);
    this.ships.push(newAlienShip);
 }
}
//generate the array of alien ships 
let enemyAliens= new Aliens();
for (let i =0; i< 6;i++ ){
    enemyAliens.addAlien(); 
  
}



//     aliens.innerHTML += 
//     // <div id="aliens" class="alienShip">
//     //     <img id="alienimage" src="images\enemy_ship.png" alt="alienship"></img>
//     //     <h3> Alien</h3>
//     //     <h4> Hull: <span class="alienShipHull">0</span></h4>
//     // </div>
// }

// gives access to the array of alien ships

//const aliensArray= alienFleet.alienShips;

//update alien fleet hull values

// function attackAliens() {
// for (let i = 0; i < NUM_ALIEN_SHIPS; i++) {
//     alienShipHull[i].innerHTML=alienFleet.alienShips[i].hull;  
// //need to check if our ship is destroyed then gameover,if not keep fighting
//  while (maverick.hull<=0){
//     maverick.hull=0;
//     playerShipHull.innerHTML=0;
//     const playerdestroyede=url("images\explosion.png");
//     console.log("Game over,your ship has been destroyed");
//     break;
//  }
//  //need to check if enemy alienshipis destroyed,if yes then break and go to the next shipand restart battle
//  while (aliensArray[0].hull<=0){
//     const aliendestroyed=url("images\explosion.png");
//     break;
//  }
// }}
function attackAliens() {
    let enemyFleet = enemyAliens.ships;
    for (let i = 0; i < enemyAliens.ships.length; i++) {
        //need to check if our ship is destroyed then gameover,if not keep fighting
        if (maverick.hull <= 0) {
            console.log("Game Over,your ship has been destroyed");
            playerShip.setAttribute("src","images/explosion.png");
            playerShipHull.innerHTML=maverick.hull;
            break;

        }
        while (maverick.hull > 0 || enemyFleet[i].hull > 0) {
            if (Math.random() < maverick.accuracy) {
                enemyAliens.ships[i].hull = enemyAliens.ships[i].hull - maverick.firepower;
            }
            //need to check if enemy alienshipis destroyed,if yes then break and go to the next shipand restart battle
            if (enemyAliens.ships[i].hull <= 0) {
                console.log("Hooray Enemy Alien is destroyed");
                playerShipHull.innerHTML=maverick.hull;
                break;
            }
            if (Math.random() < enemyAliens.ships[i].accuracy) {
                maverick.hull = maverick.hull - enemyAliens.ships[i].firepower;
            }
            if (maverick.hull <= 0) {
                console.log("Game Over, your ship has been destroyed");
                playerShip.setAttribute("src","images/explosion.png");
                playerShipHull.innerHTML=maverick.hull;
                break;

            }
        }
    }
    if (maverick.hull>0){
        aliens.setAttribute("src","images/enemy_ship_dead.png");
        playerShipHull.innerHTML=maverick.hull;
    }
}

let press=false;
attackBtn.addEventListener("click",function(){
    if (press===false){
        attackAliens();
        press=true;}
    else{
        press=false;
        window.location.reload();
    } 

});

   
//quitBtn.addEventlistener("click","");

