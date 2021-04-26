const refParser = require('json-schema-ref-parser')
const { dump } = require('js-yaml')
const fs = require('fs')

const PUBLIC_PATH = 'public/docs'
const MAIN_SCHEMA_PATH = `${PUBLIC_PATH}/redoc/index.yml`
const ARTIFACT_PATH = `${PUBLIC_PATH}/doc.yml`

const generate = async () => {
  try {
    const schema = await refParser.dereference(MAIN_SCHEMA_PATH)
    fs.writeFileSync(ARTIFACT_PATH, dump(schema))
  } catch (error) {
    console.error('Opps.. Error in generate docs')
    throw error
  }
}

generate()
