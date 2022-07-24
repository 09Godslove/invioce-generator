

const washCar = document.querySelector("#firstTask");
const washCar1 = document.querySelector("#firstAmount");
const mowLawn = document.querySelector("#secondTask");
const mowLawn1 = document.querySelector("#secondAmount");
const pullWeeds = document.querySelector("#thirdTask");
const pullWeeds1 = document.querySelector("#thirdAmount");
const notesEl = document.querySelector("#notes");
const AmountEl = document.querySelector("#amount");
const clickedEl = document.querySelector("#clicked");
const clickedEl1 = document.querySelector("#clicked1");
const clickedEl2 = document.querySelector("#clicked2");
let totalAmount = 0;
let clicked1 = 0;
let clicked2 =0;
let clicked3 = 0;

let tasks = [
    car={
        name:"Wash Car",
        price:"$" + 10
    },
    lawn={
        name:"Mow Lawn",
        price:"$" + 20
    },
    weeds={
        name:"Pull Weeds",
        price:"$" + 30
    }
]
clickedEl.addEventListener('click', e=> {
    clicked1 = 1
})
clickedEl1.addEventListener('click', e=> {
    clicked2 = 1
})
clickedEl2.addEventListener('click', e=> {
    clicked3 = 1
})
function tasks1 (){
    washCar.innerText = car.name
    washCar1.innerHTML = car.price
    notesEl.innerHTML = "We accept cash, credit cards or PayPal"
    
    if (clicked1===0){
        totalAmount += 10
        AmountEl.innerHTML = "$" + totalAmount
    }
    
}
function tasks2 (){
    mowLawn.innerText = lawn.name
    mowLawn1.innerHTML = lawn.price
    notesEl.innerHTML = "We accept cash, credit cards or PayPal"
    if (clicked2===0){
        totalAmount += 20
        AmountEl.innerHTML = "$" + totalAmount
    }
}
function tasks3 (){
    pullWeeds.innerText = weeds.name
    pullWeeds1.innerHTML = weeds.price
    notesEl.innerHTML = "We accept cash, credit cards or PayPal"
    if (clicked3===0){
        totalAmount += 30
        AmountEl.innerHTML = "$" + totalAmount
    }
}