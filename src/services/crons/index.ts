import { getCustomRepository, Repository } from 'typeorm'
import { Cron } from '../../entities/Cron'
import { CronsRepository } from '../../repositories/Crons'

interface ICronsCreate {
  name: string
  value: string
}

class CronsService {
  private cronsRepository: Repository<Cron>

  constructor() {
    this.cronsRepository = getCustomRepository(CronsRepository)
  }

  async create({ name, value }: ICronsCreate) {
    const cron = this.cronsRepository.create({
      value,
      name,
    })

    return this.cronsRepository.save(cron)
  }

  async getByValue(name: string) {
    const cron = await this.cronsRepository.findOne({
      name,
    })

    return cron
  }
}

export { CronsService }
