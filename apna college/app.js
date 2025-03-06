// let btns = document.querySelectorAll("button");
// let p = document.querySelector("p");
// let div = document.querySelector("div");

// p.addEventListener("click", function () {
//     console.log("parah was clicked!")
// });

// div.addEventListener("mouseenter", function () {
//     console.log("mouse is in the box!")
// })

// for (btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;

//     // btn.onmouseenter = function (){
//     //     console.log("you entered a button")
//     // }

//     // btn.addEventListener("click", sayHello)
//     // btn.addEventListener("click", sayName)

//     btn.addEventListener("dblclick", function () {
//         console.log("You double clicked me!")
//     })
// }

// function sayHello() {
//     alert("Hello there!!!")
// }

// function sayName() {
//     alert("Anas Raza!!")
// }

// 06. this IN EVENT LISTENER
/*
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "lightblue";
}

btn.addEventListener("click", changeColor)

h1.addEventListener("click", changeColor)

h3.addEventListener("click", changeColor)

p.addEventListener("click", changeColor)
*/

// 07. KEYBOARD EVENTS
/*
let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
    console.log(event.code)
    if (event.code == "ArrowUp") {
        console.log("character moves up")
    } else if (event.code == "ArrowDown") {
        console.log("character moves down")
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left")
    } else if (event.code == "ArrowRight") {
        console.log("character moves right")
    } else {
        console.log("please press only arrow keys!")
    }
})

// input.addEventListener("keyup", function () {
//     console.log("key was released")
// })
*/

// 08 & 09. FORM EVENTS, EXTRACTING FORM DATA
/*
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log("form was submitted");
    console.dir(form);

    let username = this.elements[0] // form.elements[0]
    let password = this.elements[1]

    console.log(username.value)
    console.log(password.value)

    alert("Hi " + username.value + ", your password is set to " + password.value);
})
*/

// 10. MORE EVENTS
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
})

let user = document.querySelector("#username")
let password = document.querySelector("#password")

user.addEventListener("change", function(){
    console.log("change event, final value:", user.value)
})

user.addEventListener("input", function(){
    console.log("input event, final value:", user.value)
})