import { Application } from 'express'
import { router } from '../../routes'

export default (app: Application): void => {
  app.use(router)
}
