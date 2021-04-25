import { createConnection } from 'typeorm'
import settingsSeed from './settings'
import cronsSeed from './crons'

const run = async () => {
  const success = await createConnection()

  if (success) {
    settingsSeed()
    cronsSeed()
  }
}

run()
