import { Listener } from './helpers/Listener'

import { ClientHandler } from './handlers/client'
import { AdminHandler } from './handlers/admin'

const use = async socketio => {
  const listener = new Listener(socketio)
  const clientHandler = new ClientHandler(socketio)
  const adminHandler = new AdminHandler(socketio)

  listener.listen('/client', clientHandler)
  listener.listen('/admin', adminHandler)
}

export default { use }
