const { Translate } = require('@google-cloud/translate').v2
require('dotenv').config()

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id,
})

const detectLanguage = async (text) => {
    try {
        let response = await translate.detect(text)
        return response[0].language
    } catch (error) {
        console.log(`Error at detectLanguage --> ${error}`)
        return 0
    }
}

detectLanguage('Some string')
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
