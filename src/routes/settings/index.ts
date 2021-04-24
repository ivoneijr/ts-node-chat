import { Router } from 'express'
import { SettingsController } from '../../controllers/settings'
import { Schema } from './schema'

const router = Router()
const messagesController = new SettingsController()

/** @summary POST /settings/:username */
router.get('/:username', Schema.show, messagesController.show)

/** @summary POST /settings/:username */
router.patch('/:username', Schema.patch, messagesController.update)

/** @summary POST /settings */
router.post('/', Schema.create, messagesController.create)

export { router }
