import { CronsService } from '../../../services/crons'

export default (): void => {
  try {
    console.log('[DB:SEED] INIT CRONS SEED')
    const cronsService = new CronsService()

    // CRON_EVERY_5_SECONDS

    cronsService.create({
      name: 'CRON_EVERY_SECOND',
      value: '* * * * * *',
    })
    cronsService.create({
      name: 'CRON_EVERY_5_SECONDS',
      value: '*/5 * * * * *',
    })

    console.log('[DB:SEED] CRONS SEED SUCCESS')
  } catch (error) {
    console.log('[DB:SEED] CRONS SEED ERROR: ', error)
  }
}
