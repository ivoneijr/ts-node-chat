import { CronsService } from '../../../services/crons'
import { Logger } from '../../../helpers/Logger'

export default (): void => {
  try {
    const cronsService = new CronsService()

    cronsService.create({
      name: 'CRON_EVERY_SECOND',
      value: '* * * * * *',
    })
    cronsService.create({
      name: 'CRON_EVERY_5_SECONDS',
      value: '*/5 * * * * *',
    })
  } catch (error) {
    Logger.error(`[DB:SEED] CRONS SEED ERROR: ${error}`)
  }
}
