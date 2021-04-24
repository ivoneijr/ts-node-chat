import { createConnection } from 'typeorm'
import cron from 'node-cron'

import { CronsService } from '../services/crons'
import sample from './sample'

const getWorkers = async () => {
  const cronsService = new CronsService()

  return [
    {
      cron: await cronsService.getByValue('CRON_EVERY_5_SECONDS'),
      run: sample,
    },
    {
      cron: await cronsService.getByValue('CRON_EVERY_SECOND'),
      run: sample,
    },
  ]
}

const run = async () => {
  const success = await createConnection()
  const workers = success ? await getWorkers() : []

  workers.map(worker => cron.schedule(worker.cron.value, worker.run))
}

run()
