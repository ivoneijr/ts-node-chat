import { Request, Response } from 'express'
import { SettingsService } from '../../services/settings'

class SettingsController {
  async show(req: Request, res: Response) {
    try {
      const { username } = req.params
      const settingsService = new SettingsService()

      const setting = await settingsService.show(username)

      res.status(200).send(setting)
    } catch (error) {
      res.status(400).send({ message: error.detail || error.message })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { chat, username } = req.body
      const settingsService = new SettingsService()

      const setting = await settingsService.create({ chat, username })

      res.status(201).send(setting)
    } catch (error) {
      res.status(400).send({ message: error.detail || error.message })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { username, chat } = req.body
      const settingsService = new SettingsService()

      const setting = await settingsService.update({ username, chat })

      res.status(200).send(setting)
    } catch (error) {
      res.status(400).send({ message: error.detail || error.message })
    }
  }
}

export { SettingsController }
