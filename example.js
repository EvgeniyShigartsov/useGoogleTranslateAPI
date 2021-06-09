const { Translate } = require('@google-cloud/translate').v2
require('dotenv').config()

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id,
})

async function translateString(string, targetLanguage) {
    const [translation] = await translate.translate(string, targetLanguage)
    return translation
}

module.exports = translateString
