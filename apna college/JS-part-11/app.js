// 01. JS CALL STACK
/*
function hello(){
    console.log("inside hello fnx")
    console.log("hello")
}

function demo(){
console.log("calling hello fnx")
    hello();
}

console.log("calling demo fnx")
demo();
console.log("done, bye!")
*/

// 02 & 03. VISUALIZING THE CALL STACK, BREAKPOINTS
/*
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three (){
    let ans =  two() + one();
    console.log(ans);
}

three();
*/

// 04. JS IS SINGLE THREADED
/*
setTimeout(function () {
    console.log("Anas raza")
}, 2000);

setTimeout(function () {
    console.log("Anas raza 2")
}, 2000);

console.log("hello...")
*/

// 05. CALLBACK HELL
/*
const h1 = document.querySelector("h1");
function changeColor(color, delay, changeNextColor) {
    setTimeout(function () {
        h1.style.backgroundColor = color
        if (changeNextColor) changeNextColor();
    }, delay)
}

// callback hell:
changeColor("lightblue", 1000, () => {
    changeColor("lightgreen", 1000, () => {
        changeColor("lightcoral", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000, () => {
                    changeColor("green", 1000, () => {
                        changeColor("red", 1000);
                    });
                });
            });
        });
    });
});
*/

// 06. SETTING UP PROMISES
/*
function saveToDb(data, success, failure) {
    const internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveToDb("anas raza", () => {
    console.log("success: your data was saved.")
    saveToDb("anas raza2", () => {
        console.log("success2: your data2 was saved.")
        saveToDb("anas raza3", () => {
            console.log("success3: your data3 was saved.")
        }, () => {
            console.log("failure3: weak connection. data3 not saved")
        })
    }, () => {
        console.log("failure2: weak connection. data2 not saved")
    })
}, () => {
    console.log("failure: weak connection. data not saved")
})
*/

// 07, 08 & 09. REFACTORING WITH PROMISES, then() AND catch() METHODS, PROMISE CHAINING
/*
function saveToDb() {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: your data was saved");
        } else {
            reject("failure: weak connection. data not saved");
        }
    })
}

saveToDb("anas raza")
    .then(() => {
        console.log("data1 saved. promise was resolved")
        return saveToDb("hello world")
    })
    .then(() => {
        console.log("data2 saved.")
        return saveToDb("hello world 3")
    })
    .then(() => {
        console.log("data3 saved.");
    })
    .catch(() => {
        console.log("promise was rejected")
    })
*/

// 10. RESULTS AND ERRORS IN PROMISE
/*
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: your data was saved.");
        } else {
            reject("failure: data not saved.")
        }
    })
}

saveToDb("anas raza")
    .then((result) => {
        console.log("data1 saved")
        console.log(result)
        return saveToDb("anas raza")
    })
    .then((result) => {
        console.log("data2 saved")
        console.log(result)
        return saveToDb("anas raza")
    })
    .then((result) => {
        console.log("data3 saved")
        console.log(result)
    })
    .catch((error) => {
        console.log("promise was rejected")
        console.error(error)
    })
*/

// 11. REFACTORING OLD CODE
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        const h1 = document.querySelector("h1");
        setTimeout(function () {
            h1.style.backgroundColor = color;
            resolve(color)
        }, delay)
    })
}

changeColor("lightblue", 1000)
    .then((result) => {
        console.log(result + " color was changed.")
        return changeColor("lightgreen", 1000);
    })
    .then((result) => {
        console.log(result + " color was changed.")
        return changeColor("lightcoral", 1000);
    })
    .then((result) => {
        console.log(result + " color was changed.")
        return changeColor("yellow", 1000);
    })
    .then((result) => {
        console.log(result + " color was changed.")
        return changeColor("blue", 1000);
    })
    .then((result) => {
        console.log(result + " color was changed.")
        return changeColor("green", 1000);
    })
    .then((result) => {
        console.log(result + " color was changed.")
        return changeColor("red", 1000);
    })
    .then((result) => {
        console.log(result + " color was changed.")
    })

