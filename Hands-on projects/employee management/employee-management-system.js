// json data
const employeesData = [
    {
        "id": 1001,
        "imageUrl": "gfg.png",
        "firstName": "Thomas",
        "lastName": "Leannon",
        "email": "Thomas.Leannon@gfg.com",
        "contactNumber": "4121091095",
        "age": 43,
        "dob": "26/08/1979",
        "salary": 1,
        "address": "Address1"
    },
    {
        "id": 1002,
        "imageUrl": "gfg.png",
        "firstName": "Faye",
        "lastName": "Sauer",
        "email": "Faye.Sauergfg.com",
        "contactNumber": "4914696673",
        "age": 60,
        "dob": "28/06/1962",
        "salary": 2,
        "address": "Address2"
    },
    {
        "id": 1003,
        "imageUrl": "gfg.png",
        "firstName": "Deven",
        "lastName": "Halvorson",
        "email": "Deven.Halvorsongfg.com",
        "contactNumber": "4479795571",
        "age": 29,
        "dob": "06/01/1993",
        "salary": 3,
        "address": "Address3"
    },
    {
        "id": 1004,
        "imageUrl": "gfg.png",
        "firstName": "Melisa",
        "lastName": "Schuppe",
        "email": "Melisa.Schuppegfg.com",
        "contactNumber": "4443995334",
        "age": 38,
        "dob": "06/09/1984",
        "salary": 4,
        "address": "Address4"
    },
    {
        "id": 1005,
        "imageUrl": "gfg.png",
        "firstName": "Dell",
        "lastName": "Kris",
        "email": "Dell.Krisgfg.com",
        "contactNumber": "4505692843",
        "age": 89,
        "dob": "14/03/1933",
        "salary": 5,
        "address": "Address5"
    },
    {
        "id": 1006,
        "imageUrl": "gfg.png",
        "firstName": "Marcia",
        "lastName": "Gutmann",
        "email": "Marcia.Gutmanngfg.com",
        "contactNumber": "4746199430",
        "age": 56,
        "dob": "24/07/1966",
        "salary": 6,
        "address": "Address6"
    },
    {
        "id": 1007,
        "imageUrl": "gfg.png",
        "firstName": "Jarrod",
        "lastName": "Ortiz",
        "email": "Jarrod.Ortizgfg.com",
        "contactNumber": "4859095720",
        "age": 82,
        "dob": "26/12/1940",
        "salary": 7,
        "address": "Address7"
    },
    {
        "id": 1008,
        "imageUrl": "gfg.png",
        "firstName": "Gabriella",
        "lastName": "Wilkinson",
        "email": "Gabriella.Wilkinsongfg.com",
        "contactNumber": "4379190775",
        "age": 36,
        "dob": "24/06/1986",
        "salary": 8,
        "address": "Address8"
    },
    {
        "id": 1009,
        "imageUrl": "gfg.png",
        "firstName": "Elisabeth",
        "lastName": "Hayes",
        "email": "Elisabeth.Hayesgfg.com",
        "contactNumber": "4394091994",
        "age": 66,
        "dob": "17/08/1956",
        "salary": 9,
        "address": "Address9"
    },
    {
        "id": 1010,
        "imageUrl": "gfg.png",
        "firstName": "Jaime",
        "lastName": "Reichel",
        "email": "Jaime.Reichelgfg.com",
        "contactNumber": "4622392580",
        "age": 41,
        "dob": "21/01/1981",
        "salary": 10,
        "address": "Address10"
    }
];

// renderEmployeeList();

// showEmployeeDetails(employeesData[0]);

const form = document.querySelector("form")
const submitBtn = document.querySelector("#submit-btn");
const firstNameInput = document.querySelector("#firstname")
const lastNameInput = document.querySelector("#lastname")
const imageInput = document.querySelector("#image-url")
const emailInput = document.querySelector("#email")
const contactInput = document.querySelector("#contact")
const salaryInput = document.querySelector("#salary")
const dateInput = document.querySelector("#date")
const addressInput = document.querySelector("#address")

// submitBtn.addEventListener("click", addEmployee);



// function addEmployee() {
//     console.log("add listener")
//     const ageInMilliseconds = Date.now() - new Date(dateInput.value)
//         .getTime();
//     const calculatedEmployeeAge = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 30 / 12);

//     let employeeId = 1001
//     if (employeesData.length) {
//         employeeId = employeesData[employeesData.length - 1].id + 1
//     }

//     const newEmployee = {
//         "id": employeeId,
//         "imageUrl": imageInput.value,
//         "firstName": firstNameInput.value,
//         "lastName": lastNameInput.value,
//         "email": emailInput.value,
//         "contactNumber": contactInput.value,
//         "age": calculatedEmployeeAge,
//         "dob": dateInput.value,
//         "salary": salaryInput.value,
//         "address": addressInput.value
//     };

//     employeesData.unshift(newEmployee);
//     console.log(employeesData)
//     renderEmployeeList();
//     showEmployeeDetails(employeesData[0])
// }

// 1. pehle data access karenge aur hr object pr loop chalao
// 2. hr object ke liye eik list item create krke append krdo
// 3. hr item pr event listener lagaakr uske click krne pr details main uska data show kro
// 4. delete button pr event listener lagaakr us main delete functionality add krdo

const employeeDetailsElem = document.querySelector("#employee-details div");
let selectedEmployee = employeesData[0];
renderEmployeeDetails();

// function renderEmployeeList() {
const employeeListElem = document.querySelector("#employee-list div");
employeeListElem.innerHTML = "";

for (var i = 0; i < employeesData.length; i++) {
    const employeeObj = employeesData[i];

    const listItemElem = document.createElement("div");
    listItemElem.setAttribute("class", "list-item");

    if (i == 0) listItemElem.classList.add("selected");

    listItemElem.innerHTML = "<p>" + employeeObj.firstName + " " + employeeObj.lastName + "</p> <button>Edit</button> <button>X</button>"

    listItemElem.addEventListener("click", function () {
        document.querySelectorAll(".list-item")
            .forEach(item => {
                if (item.classList.contains("selected")) {
                    item.classList.remove("selected")
                }
            })
        this.classList.add("selected")
        selectedEmployee = employeeObj
        renderEmployeeDetails()
    })

    listItemElem.firstElementChild.nextElementSibling
        .addEventListener("click", function (event) {
            event.stopPropagation();
            // editEmployeeDetails(employeeObj);
        })

    listItemElem.lastChild.addEventListener("click", function (event) {
        event.stopPropagation();
        // employeesData.splice(i, 1);
        // renderEmployeeList();
        // console.log(employeesData)
        // deleteEmployee(employeeObj.id);
    })

    employeeListElem.appendChild(listItemElem);
}
// }

// function showEmployeeDetails(selectedEmployee) {
// // console.log(id)
// // for (var i = 0; i < employeesData.length; i++) {
// //     if (employeesData[i].id == employeeId) {
// //         selectedEmployee = employeesData[i]
// //     }
// // }
// if (selectedEmployee == undefined) {
//     document.querySelector("#employee-details div").innerHTML = "";
//     return;
// }

// const previousDiv = document.querySelector("#employee-details div")
// if (previousDiv) {
//     previousDiv.remove();
// }

renderEmployeeDetails();
function renderEmployeeDetails() {
    employeeDetailsElem.innerHTML = "";

    const div = document.createElement("div");
    div.innerHTML = '<img src="../media/profile-img.png" alt="" width="200"> <h5>' + selectedEmployee.firstName + " " + selectedEmployee.lastName + "(" + selectedEmployee.age + ")" + '</h5> <p>' + selectedEmployee.address + '</p> <p>' + selectedEmployee.email + '</p> <p>Mobile - ' + selectedEmployee.contactNumber + '</p> <p>DOB - ' + selectedEmployee.dob + '</p>';

    employeeDetailsElem.appendChild(div);
}


// }


// function deleteEmployee(employeeId) {
// let selectedEmployee;
// for (var i = 0; i < employeesData.length; i++) {
//     if (employeesData[i].id == employeeId) {
//         selectedEmployee = employeesData[i]
//         employeesData.splice(i, 1);
//     }
// }
// showEmployeeDetails(employeesData[0]);
// }

// const saveBtn = document.querySelector("#save-btn");


// function editEmployeeDetails(employeeObj) {
// console.log(employeeObj)
// firstNameInput.value = employeeObj.firstName;
// lastNameInput.value = employeeObj.lastName;
// imageInput.value = employeeObj.imageUrl;
// emailInput.value = employeeObj.email;
// contactInput.value = employeeObj.contactNumber;
// salaryInput.value = employeeObj.salary;

// const formattedDOB = employeeObj.dob.split("/")[2] + "-" + employeeObj.dob.split("/")[1] + "-" + employeeObj.dob.split("/")[0];
// // console.log(formattedDOB)

// dateInput.value = formattedDOB;
// addressInput.value = employeeObj.address;

// document.querySelector("#submit-btn").style.display = "none";
// saveBtn.style.display = "block";

// form.removeEventListener("submit", addEmployee);

// saveBtn.addEventListener("click", function () {
//     updateEmployeeDetails(employeeObj);
// })
// }

// function updateEmployeeDetails(employeeObj) {
// console.log("update listener")
// const ageInMilliseconds = Date.now() - new Date(dateInput.value)
//     .getTime();
// const calculatedEmployeeAge = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 30 / 12);

// employeeObj.firstName = firstNameInput.value
// employeeObj.lastName = lastNameInput.value
// employeeObj.imageUrl = imageInput.value
// employeeObj.email = emailInput.value
// employeeObj.contactNumber = contactInput.value
// employeeObj.salary = salaryInput.value
// employeeObj.dob = dateInput.value
// employeeObj.address = address.value
// employeeObj.age = calculatedEmployeeAge;

// console.log(employeeObj);

// renderEmployeeList();
// showEmployeeDetails(employeesData[0]);
// form.reset();

// saveBtn.style.display = "none";
// document.querySelector("#submit-btn").style.display = "block";
// }