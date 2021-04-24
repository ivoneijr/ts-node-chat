import { Router } from 'express'
import { MessagesController } from '../../controllers/messages'
import { Schema } from './schema'

const router = Router()
const messagesController = new MessagesController()

/** @summary GET /messages */
router.get('/', messagesController.index)

/** @summary POST /messages */
router.post('/', Schema.create, messagesController.create)

export { router }
