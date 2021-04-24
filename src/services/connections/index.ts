import { getCustomRepository, Repository } from 'typeorm'
import { Connection } from '../../entities/Connection'
import { ConnectionsRepository } from '../../repositories/Connections'

interface IConnectionCreate {
  id?: string
  admin_id?: string
  user_id: string
  socket_id: string
}

class ConnectionsService {
  private connectionsRepository: Repository<Connection>

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository)
  }

  async create({ user_id, admin_id, socket_id, id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({
      id,
      user_id,
      admin_id,
      socket_id,
    })

    return this.connectionsRepository.save(connection)
  }

  async upsert({ user_id, admin_id, socket_id, id }: IConnectionCreate) {
    let connection = await this.connectionsRepository.findOne({ user_id })

    if (!connection) {
      connection = this.connectionsRepository.create({
        id,
        user_id,
        admin_id,
        socket_id,
      })

      await this.connectionsRepository.save(connection)
    } else {
      await this.connectionsRepository.update({ user_id }, { socket_id })
    }

    return connection
  }

  async awaitingList() {
    const list = await this.connectionsRepository.find({
      where: { admin_id: null },
      relations: ['user'],
    })

    return list
  }

  async findByUserId(user_id: string) {
    const connection = this.connectionsRepository.findOne({ user_id })

    return connection
  }

  async findBySocketId(socket_id: string) {
    const connection = this.connectionsRepository.findOne({ socket_id })

    return connection
  }
}

export { ConnectionsService }
