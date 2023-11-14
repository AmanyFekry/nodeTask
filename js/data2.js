const fs = require("fs")
//add item
const addPerson = (id, fname, lname, age, city) =>
{
    const data = loadData()
    const duplicatedData = data.filter((obj) =>
    {
        return obj.id === id
    }
    )
    if (duplicatedData.length == 0)
    {

        data.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        saveAllData(data)
    } else
    {
        console.log("Error duplicated data")
    }

}

//////////////////////////////////////
//change data to object
const loadData = () =>
{
    try
    {
        const dataJson = fs.readFileSync('data2.json').toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}

const saveAllData = (data) =>
{
    const saveAllDataJdon = JSON.stringify(data)
    fs.writeFileSync('data2.json', saveAllDataJdon)
}
////////////////////////////////////
//delete 
const deletePerson = (id) =>
{
    const data = loadData();
    const dataToKeep = data.filter((obj) =>
    {
        return obj.id !== id
    })
    saveAllData(dataToKeep)
}

////////////////
//read Data 
const readData = (id) =>
{
    const data = loadData()

    const itemNeeded = data.find((obj) =>
    {
        return obj.id == id
    })
    console.log(itemNeeded)

    if (itemNeeded)
    {
        console.log(itemNeeded)
    } else
    {
        console.log("id needed not found")
    }

}
/////////////////
//list data
const listData = () =>
{
    const data = loadData()
    data.forEach((obj) =>
    {
        console.log(obj.fname, obj.lname, obj.city)
    })
}


module.exports = {
    addPerson,
    deletePerson,
    readData,
    listData,
}