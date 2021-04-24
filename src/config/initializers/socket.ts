import * as http from 'http'
import { Application } from 'express'
import { Server } from 'socket.io'

import IOListener from '../../socket'

const options = {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
}

export default (app: Application): http.Server => {
  const httpServer = http.createServer(app)
  const io = new Server(httpServer, options)

  IOListener.use(io)

  return httpServer
}
