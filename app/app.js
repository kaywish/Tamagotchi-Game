// NAME YOUR PET //
// const NameMe = prompt(" Name your pet")
// const WhatUp= document.getElementById("name")

// WhatUp.innerHTML=("Name:" + NameMe)




class Tamagotchi{
    constructor(name){
    this.name= "Tamagotchi"
    this.hunger= 1
    this.sleepiness=1
    this.boredom=1
    this.age=1

}



 newGame(){
console.log("Hunger level is "+this.hunger)
console.log("Sleepiness level is"+ this.sleepiness)
console.log("Boredom level is " +this.boredom) 
console.log("Age is " + this.age)
 
}

   
 eatFood(num){ 
console.log("Your pet ate an apple " + (this.hunger+= num))

 }

rest(num){
  console.log(" Your pet is well rested " + (this.sleepiness+=num))
}

 playNow(num){
   console.log("Your pet is having fun "+ (this.boredom += num))
 }

ageUp(num){
 {  
    }

}

lightSwitch() {
    console.log(" You pressed the light switch")
}


countUp() {
if (this.boredom == 10) 
{console.log(" Your pet died")
    }
    if (this.hunger == 10) {
        console.log(" Your pet died")
    }
    if (this.sleepiness == 10) {
        console.log(" Your pet died")
    }
   


}



}

//EVENTS

//New Game
document.getElementById("start").addEventListener("click", (e) => newGame() )    

// Eat Food
document.getElementById("feed").addEventListener("click", (e) => eatFood() )    

// Rest
document.getElementById("rest").addEventListener("click", (e) => rest() )    

// Play
document.getElementById("play").addEventListener("click", (e) => playNow() )    

// Light Switch
document.getElementById("lights").addEventListener("click", (e) => lightSwitch() )    







const player = new Tamagotchi

player.addAge();









