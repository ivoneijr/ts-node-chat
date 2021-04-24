import { Router } from 'express'
import { CronsController } from '../../controllers/crons'
import { Schema } from './schema'

const router = Router()
const cronsController = new CronsController()

/** @summary POST /users */
router.post('/', Schema.create, cronsController.create)

export { router }
