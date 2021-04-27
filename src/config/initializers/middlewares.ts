import { Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'

export default (app: Application): void => {
  app.use(cors())
  app.use(helmet())
  app.use(compression())
  app.use(bodyParser.json())
}
