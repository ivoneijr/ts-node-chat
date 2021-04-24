import { Router } from 'express'
import { router as settings } from './settings'
import { router as users } from './users'
import { router as messages } from './messages'
import { router as crons } from './crons'

const router = Router()

/** @summary GET /status */
router.get(['/', '/status', '/health', '/ping'], async (_, res) =>
  res.send({ status: 'It´s Alive!' })
)

router.use('/settings', settings)
router.use('/users', users)
router.use('/messages', messages)
router.use('/crons', crons)

export { router }
