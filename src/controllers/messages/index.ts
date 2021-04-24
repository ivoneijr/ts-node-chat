import { Request, Response } from 'express'
import { MessagesService } from '../../services/messages'

class MessagesController {
  async create(req: Request, res: Response) {
    try {
      const { body: admin_id, text, user_id } = req.body
      const messagesService = new MessagesService()

      const user = await messagesService.create({
        admin_id,
        text,
        user_id,
      })

      res.status(201).send(user)
    } catch (error) {
      res.status(400).send({ message: error.detail || error.message })
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { user_id } = req.query
      const messagesService = new MessagesService()

      const user = user_id
        ? await messagesService.listByUser(`${user_id}`)
        : await messagesService.all()

      res.status(200).send(user)
    } catch (error) {
      res.status(400).send({ message: error.detail || error.message })
    }
  }
}

export { MessagesController }
