import { createConnection } from 'typeorm'
import settingsSeed from './settings'
import cronsSeed from './crons'
import init from '../../config/initializers'

const run = async () => {
  init()
  const success = await createConnection()

  if (success) {
    settingsSeed()
    cronsSeed()
  }
}

run()
