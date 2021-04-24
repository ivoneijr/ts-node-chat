import { getCustomRepository, Repository } from 'typeorm'
import { User } from '../../entities/User'
import { UsersRepository } from '../../repositories/Users'

interface IUsersCreate {
  email: string
}

class UsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async create({ email }: IUsersCreate) {
    const user = this.usersRepository.create({
      email,
    })

    return this.usersRepository.save(user)
  }

  async findOrCreate({ email }: IUsersCreate) {
    let user = await this.usersRepository.findOne({ email })

    if (!user) {
      user = await this.usersRepository.create({
        email,
      })

      this.usersRepository.save(user)
    }

    return user
  }
}

export { UsersService }
