// 01. async FUNCTIONS
/*
async function greet() {
    throw "404 page not found!"
    return "Hello"
}

greet()
    .then((result) => {
        console.log("promise was resolved")
        console.log("result was", result)
    })
    .catch((error) => {
        console.log("promise was rejected by error:", error)
    })

const demo = async () => {
    return 4;
}
*/

// 02. await KEYWORD
/*
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000)
//     })
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        const h1 = document.querySelector("h1");
        setTimeout(() => {
            h1.style.backgroundColor = color;
            console.log("color changed to " + color + "!")
            resolve("color changed!");
        }, delay)
    })
}

async function demo() {
    await changeColor("lightblue", 1000)
    await changeColor("lightgreen", 1000)
    await changeColor("lightcoral", 1000)
}
*/

// 03. HANDLING REJECTIONS
/*
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        const h1 = document.querySelector("h1")
        setTimeout(() => {
            const num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise was rejected")
            }

            h1.style.backgroundColor = color;
            console.log("color changed to", color)
            resolve();
        }, delay)
    })
}

async function demo() {
    try {
        await changeColor("red", 1000)
        await changeColor("green", 1000)
        await changeColor("blue", 1000)
        await changeColor("yellow", 1000)
    } catch (error) {
        console.error("error:", error);
    }

    const a = 5;
    console.log(a)
    console.log("new number is", a + 10);
}

demo();
*/

// 07. ACCESSING JSON DATA
/*
let jsonRes = '{"fact": "The normal body temperature of a cat is between 100.5 ° and 102.5 °F. A cat is sick if its temperature goes below 100 ° or above 103 °F.", "length": 136}'

let validRes = JSON.parse(jsonRes)
console.log(validRes)
console.log(validRes.fact)

let obj = {
    name: "Anas",
    marks: 120
}

console.log(JSON.stringify(obj))
*/

// 14. OUR FIRST API REQUEST
/*
const url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log("data1 =", data.fact)
        return fetch(url)
    })
    .then((res) => {
        return res.json()
    })
    .then((data2) => {
        console.log("data2 =", data2.fact)
    })
    .catch((err) => {
        console.log("ERROR -", err)
    })

    console.log("Cat facts")
*/

// 15. USING FETCH WITH async-await
const url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.fact)

        const res2 = await fetch(url);
        const data2 = await res2.json();
        console.log(data2.fact)
    }
    catch (err) {
        console.log("ERROR -", err)
    }

    console.log("bye")
}

getFacts();