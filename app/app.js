// NAME YOUR PET //
alert(" Welcome to Tamagotchi")
const nameMe = prompt(" Name your pet")
const whatUp= document.querySelector("#name")

whatUp.innerText=`Name : ${nameMe}`




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
//////////////////
//Food
const passTime = setInterval(() => {
    const eatNow = document.getElementById("food")
    eatNow.innerHTML=("Food Level: " + this.hunger)
    this.hunger++
 
if (this.hunger == 10) {
    alert("Your pet died")

}

console.log(passTime)
}, 3000);

/////////////////////////////
// Sleep
const sleepTime = setInterval(() => {
    const eatNow = document.getElementById("energy")
    eatNow.innerHTML=("Energy Level: " + this.sleepiness)
    this.sleepiness++
 
if (this.sleepiness == 10) {
    alert("Your pet died")

}

console.log(sleepTime)
}, 3000);

/////////////////////////////
// Fun

const funTime = setInterval(() => {
    const eatNow = document.getElementById("fun")
    eatNow.innerHTML=("Fun Level: " + this.boredom)
    this.boredom++
 
if (this.boredom == 10) {
    alert("Your pet died")

}

console.log(funTime)
}, 3000);

///////////////////////////////
// Age

const ageTime = setInterval(() => {
    const eatNow = document.getElementById("age")
    eatNow.innerHTML=("Age: " + this.age)
    this.age++
 
if (this.age == 3) {
    alert("Your pet grew!")

}

if (this.age == 6){
    alert(" Your pet grew!")
}

if (this.age == 9){
    alert(" Your pet wont stop growing!")
}





console.log(ageTime)
}, 6000);










}


//EAT FOOD FUNCTION//
 eatFood(){ 
const passTime = setInterval(() => {
    const eatNow = document.getElementById("food")
    eatNow.innerHTML=("Food Level: " + this.hunger)
    this.hunger--
    if (this.hunger ===0)
    this.hunger ++

    {
        
    }
 
console.log(passTime)
}, 2000);

console.log("Your pet ate an apple ")
}







 ///////////

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


lightOn() {

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
// const backGround= ("#000000")
const getOn =document.getElementById("light off")
getOn.addEventListener("click", (e) => {
    console.log("hi",document.querySelector(".background").src)
    
    document.querySelector(".background").src="Night.jpg"
})

const getOff= document.getElementById("light on")
getOff.addEventListener("click", (e) => {

    console.log("hi",document.querySelector(".background").src)

    document.querySelector(".background").src="Background.jpg"
})




   player.lightOn()
  
















