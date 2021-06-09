const fs = require('fs')
const translateString = require('../example')

async function writeResult(obj) {
    const start = Date.now()

    const result = await translateObj(obj)

    fs.writeFileSync('RU.json', JSON.stringify(result))
    const end = Date.now() - start
    console.log(end)
}

async function translateObj(obj) {
    // That`s just a simple recursive fn that takes plain objects which values are Object/String,
    // and reurns object with same keys but translated values.

    const result = {}

    for (let key in obj) {
        const currentValue = obj[key]

        if (currentValue instanceof Object) {
            result[key] = await translateObj(currentValue)
            continue
        }
        result[key] = await translateString(currentValue, 'ru')
    }
    return result
}
