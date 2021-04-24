import { EntityRepository, Repository } from 'typeorm'
import { Cron } from '../entities/Cron'

@EntityRepository(Cron)
class CronsRepository extends Repository<Cron> {}

export { CronsRepository }
