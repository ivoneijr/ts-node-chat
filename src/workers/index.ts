import { createConnection } from 'typeorm'
import cron from 'node-cron'

import { CronsService } from '../services/crons'
import sample from './sample'
import { Cron } from '../entities/Cron'

interface IWorkers {
  cron?: Cron
  run?(): void
}

const getWorkers = async (): Promise<IWorkers[]> => {
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
  try {
    const success = await createConnection()
    const workers = success ? await getWorkers() : []

    workers.map(worker =>
      worker.cron ? cron.schedule(worker.cron.value, worker.run) : null
    )
  } catch (error) {
    console.log(`[error] running workers ${error}`)
  }
}

run()
