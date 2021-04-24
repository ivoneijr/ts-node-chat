import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import * as http from 'http'
import express from 'express'
import useStatic from './static'

import socket from './socket'
import '../../database'
import useRoutes from './routes'

dotenv.config({ path: '.env' })

const init = (app: express.Application): http.Server => {
  app.use(cors())
  app.use(helmet())
  app.use(compression())
  app.use(bodyParser.json())

  useStatic(app)
  useRoutes(app)

  // TODO: Add express logger
  // TODO: Add error handler
  // TODO: Add Logger init

  const server = socket(app)

  return server
}

export default init
