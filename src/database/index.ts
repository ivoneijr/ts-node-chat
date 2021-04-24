import { createConnection } from 'typeorm'

const connect = async () => {
  const success = await createConnection()

  if (success) {
    console.log(`📚 DB connection established`)
  }
}

connect()
