import { createConnection } from 'typeorm'
import { Logger } from '../helpers/Logger'

const connect = async () => {
  const success = await createConnection()

  if (success) {
    Logger.info(`📚 DB connection established`)
  }
}

connect()
