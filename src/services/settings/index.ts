import { getCustomRepository, Repository } from 'typeorm'
import { Setting } from '../../entities/Setting'
import { SettingsRepository } from '../../repositories/Settings'

interface ISettingsCreate {
  chat: boolean
  username: string
}

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async create({ chat, username }: ISettingsCreate) {
    const setting = await this.settingsRepository.create({
      chat,
      username,
    })

    return this.settingsRepository.save(setting)
  }

  async show(username: string) {
    const setting = await this.settingsRepository.findOne({
      username,
    })

    return setting
  }

  async update({ chat, username }: ISettingsCreate) {
    const setting = await this.settingsRepository.findOne({
      username,
    })

    return this.settingsRepository.save({ ...setting, username, chat })
  }
}

export { SettingsService }
