import { SettingsService } from '../../../services/settings'
import { Logger } from '../../../helpers/Logger'

export default (): void => {
  try {
    const settingsService = new SettingsService()

    settingsService.create({ chat: true, username: 'admin' })
  } catch (error) {
    Logger.error(`[DB:SEED] CRONS SEED ERROR: ${error}`)
  }
}
