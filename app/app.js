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
}, 2000);

/////////////////////////////
// Sleep
const sleepTime = setInterval(() => {
    const eatNow = document.getElementById("energy")
    eatNow.innerHTML=("Energy Level: " + this.sleepiness)
    this.sleepiness++
 
if (this.sleepiness == 100) {
    alert("Your pet died")

}

console.log(sleepTime)
}, 4000);

/////////////////////////////
// Fun

const funTime = setInterval(() => {
    const eatNow = document.getElementById("fun")
    eatNow.innerHTML=("Fun Level: " + this.boredom)
    this.boredom++
 
if (this.boredom == 100) {
    alert("Your pet died")

}

console.log(funTime)
}, 5000);

///////////////////////////////
// Age

const ageTime = setInterval(() => {
    const eatNow = document.getElementById("age")
    eatNow.innerHTML=("Age: " + this.age)
    this.age++
 
if (this.age == 4) {
    alert("Your pet grew!")
    
document.querySelector(".character").src="young.jpg"

}

if (this.age == 6){
    alert(" Your pet grew!")
document.querySelector(".character").src="Character.png"
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
    if (this.hunger == 0)
    clearInterval(passTime)

    {
        
    }
 
console.log(passTime)
}, 200);

console.log("Your pet ate an apple ")
}

 //REST FUNCTION//

rest(){

    const passTime = setInterval(() => {
        const eatNow = document.getElementById("energy")
        eatNow.innerHTML=("Energy Level: " + this.sleepiness)
        this.sleepiness--
        if (this.sleepiness == 0)
        clearInterval(passTime)
    
        {
            
        }
  
    }, 200);
    
    console.log("Your pet is well rested")
    }

//PLAY FUNCTION
haveFun() {
    const passTime = setInterval(() => {
        const eatNow = document.getElementById("fun")
        eatNow.innerHTML=("Fun Level: " + this.boredom)
        this.boredom--
        if (this.boredom == 0)
        clearInterval(passTime)
    
        {
            
        }
  
    }, 200);
    
    console.log("Your pet is having fun")
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
document.getElementById("rest").addEventListener("click", (e) => player.rest() )    

// Play
document.getElementById("play").addEventListener("click", (e) => player.haveFun() )    





// Light Switch//

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
  
















