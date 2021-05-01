import express from 'express'

import '../../database'
import useMiddlewares from './middlewares'
import useSocket from './socket'
import useStatic from './static'
import useRoutes from './routes'
import useLogger from './logger'
import useGraphql from './graphql'

const init = (app?: express.Application): any => {
  if (!app) {
    return useLogger()
  }

  useMiddlewares(app)
  useStatic(app)
  useRoutes(app)
  useLogger()
  useGraphql(app)

  const server = useSocket(app)

  return server
}

export default init
