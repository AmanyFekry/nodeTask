/// Task 1
// 1) Create object person

const fs = require("fs")

const person = {
    fname: "Ahmed",
    lname: "Hossam",
    age: 20,
    city: "alex"
}

// 2) Change obj to Json
const personJson = JSON.stringify(person)
console.log(personJson)

//3-Store in file

fs.writeFileSync("data.json", personJson)

//// 4) Read file (json)
fs.readFileSync("data.json")
console.log(fs.readFileSync("data.json"))


// 5) Convert to object
const personOBJ = JSON.parse(personJson)
console.log(personOBJ)

// 6) Update data to (adel ahmed, 40, cairo)
personOBJ.fname = "adel"
personOBJ.lname = "ahmed"
personOBJ.age = 40
personOBJ.city = "cairo"

// 7) Convert obj to Json
const updatePersonJson = JSON.stringify(personOBJ)

// 8) Store in file
fs.writeFileSync("updatedata.json", updatePersonJson)
//////////////////////////////////////////////////////

//Task2

// 1- Add 7 persons with ids from 1-7

const yargs = require("yargs")
const data2 = require('./data2')

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        id: {
            describe: "this the id",
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: "this the first name in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this the last name in add command",
            demandOption: true,
            type: "string"
        },
    },
    handler: (x) =>
    {
        data2.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})
//// 2- Delete id 4 - 6
///wrie in terminal node js/app.js delete --id="4" --id="6"
yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) =>
    {
        data2.deletePerson(x.id)
    },
})
///////////////////////////////////
///////////////////////////////////
//3-list fname lname and city for all   
yargs.command({
    command: "list",
    describe: "to list all items ",
    handler: () =>
    {
        data2.listData()
    }
})

///////////////////////
//4- read all data for only the 5th person 
// in terminal write node js/app.js read --id="5"
yargs.command({
    command: "read",
    describe: "read items",
    handler: (x) =>
    {
        data2.readData(x.id)
    }
})


yargs.parse()
