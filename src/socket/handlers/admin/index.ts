import { Namespace, Server } from 'socket.io'
import { ConnectionsService } from '../../../services/connections'
import { MessagesService } from '../../../services/messages'
import { Handler } from '../../helpers/Handler'

class AdminHandler implements Handler {
  private io: Server

  constructor(io: Server) {
    this.io = io
  }

  async handle(namespace: Namespace) {
    namespace.on('connection', async socket => {
      const connectionsService = new ConnectionsService()
      const messagesService = new MessagesService()

      const awaiting_list = await connectionsService.awaitingList()

      namespace.emit('admin:awaiting_list', awaiting_list)

      socket.on('admin:list_messages_by_user', async (params, callback) => {
        const { user_id } = params

        const allMessages = await messagesService.listByUser(user_id)

        callback(allMessages)
      })

      socket.on('admin-to-client:send_message_from_admin', async params => {
        const { user_id, text } = params

        await messagesService.create({
          text,
          user_id,
          admin_id: socket.id,
        })

        const connection = await connectionsService.findByUserId(user_id)

        this.io
          .of('/client')
          .to(connection.socket_id)
          .emit('admin-to-client:send_message_to_client', {
            text,
            socket_id: socket.id,
          })
      })
    })
  }
}

export { AdminHandler }
