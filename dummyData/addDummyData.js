const fs = require("fs"),
    models = require('../models/index')

// NOTE
// all password use "123"

fs.readdirSync(__dirname).forEach(element => {
    element = element.split(".")
    if (element[2] == "json") {
        console.log(`inserting table ${element[1]} :`)
        let res = models[element[1]].bulkCreate(require(`./${element[0]}.${element[1]}.json`))
        res ? console.log('success') : console.log("failed")
    }
})