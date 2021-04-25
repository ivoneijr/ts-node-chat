import { Server } from 'socket.io'
import { Handler } from './Handler'
import { Logger } from '../../helpers/Logger'

class Listener {
  private io: Server

  constructor(io: Server) {
    this.io = io
  }

  listen(namespace: string, handler: Handler) {
    try {
      handler.handle(this.io.of(namespace))
    } catch (err) {
      Logger.error(`listen function not found for ${namespace} namespace`)
    }
  }
}

export { Listener }
