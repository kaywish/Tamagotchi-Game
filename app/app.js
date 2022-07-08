// NAME YOUR PET //
// const nameMe = prompt(" Name your pet")
// const whatUp= document.querySelector("#name")

// whatUp.innerText=`Name : ${nameMe}`




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

   
 eatFood(){ 
const passTime = setInterval(() => {
    const eatNow = document.getElementById("food")
    eatNow.innerHTML=("Food Level: " + this.hunger)
    this.hunger++
if (this.hunger == 3) {
    alert("Your pet died").player.newGame() 
}

console.log(passTime)
}, 2000);

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
test() {
    alert("work")
}




}
const player = new Tamagotchi

//EVENTS

//New Game
const startButton= document.getElementById("start")
startButton.addEventListener("click", (e) => {
    console.log("hello from start") 
    player.newGame()} )    
// Eat Food
document.getElementById("feed").addEventListener("click", (e) => player.eatFood() )    

// Rest
document.getElementById("rest").addEventListener("click", (e) => rest() )    

// Play
document.getElementById("play").addEventListener("click", (e) => playNow() )    

// Light Switch
document.getElementById("lights").addEventListener("click", (e) => lightSwitch() )    

















