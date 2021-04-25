import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'

import socket from './socket'
import '../../database'
import useStatic from './static'
import useRoutes from './routes'
import useLogger from './logger'

dotenv.config({ path: '.env' })

const init = (app?: express.Application): any => {
  if (!app) {
    return useLogger()
  }

  app.use(cors())
  app.use(helmet())
  app.use(compression())
  app.use(bodyParser.json())

  useStatic(app)
  useRoutes(app)
  useLogger()

  // TODO: Add express logger

  const server = socket(app)

  return server
}

export default init
