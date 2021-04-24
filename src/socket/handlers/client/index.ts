import { Namespace, Server } from 'socket.io'
import { Handler } from '../../helpers/Handler'
import { ConnectionsService } from '../../../services/connections'
import { UsersService } from '../../../services/users'
import { MessagesService } from '../../../services/messages'

class ClientHandler implements Handler {
  private io: Server

  constructor(io: Server) {
    this.io = io
  }

  async handle(namespace: Namespace) {
    namespace.on('connection', socket => {
      const connectionsService = new ConnectionsService()
      const usersService = new UsersService()
      const messagesService = new MessagesService()

      socket.on('client:connected', async params => {
        const socket_id = socket.id
        const { email, text } = params

        const { id: user_id } = await usersService.findOrCreate({ email })

        await connectionsService.upsert({ socket_id, user_id })
        await messagesService.create({ text, user_id })

        const allMessages = await messagesService.listByUser(user_id)

        socket.emit('client:all_messages', allMessages)

        const allUsers = await connectionsService.awaitingList()

        this.io.of('/admin').emit('admin:awaiting_list', allUsers)
      })

      socket.on('client-to-admin:send_message_from_client', async params => {
        const { text, admin_socket_id } = params
        const { id: socket_id } = socket

        const { user_id } = await connectionsService.findBySocketId(socket_id)
        const message = await messagesService.create({ text, user_id })

        this.io
          .of('/admin')
          .to(admin_socket_id)
          .emit('client-to-admin:send_message_from_admin', {
            message,
            socket_id,
          })
      })
    })
  }
}

export { ClientHandler }
