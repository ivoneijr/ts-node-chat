import { SettingsService } from '../../../services/settings'

export default (): void => {
  try {
    console.log('[DB:SEED] INIT SETTINGS SEED')
    const settingsService = new SettingsService()

    settingsService.create({ chat: true, username: 'admin' })

    console.log('[DB:SEED] SETTINGS SEED SUCCESS')
  } catch (error) {
    console.log('[DB:SEED] SETTINGS SEED ERROR: ', error)
  }
}
