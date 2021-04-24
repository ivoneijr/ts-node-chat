import { Router } from 'express'
import { UsersController } from '../../controllers/users'
import { Schema } from './schema'

const router = Router()
const usersController = new UsersController()

/** @summary POST /users */
router.post('/', Schema.create, usersController.create)

export { router }
