import { Request, Response } from 'express'
import { CronsService } from '../../services/crons'

class CronsController {
  create = async (req: Request, res: Response) => {
    try {
      const { name, value } = req.body
      const cronsService = new CronsService()

      const cron = await cronsService.create({ name, value })

      res.status(201).send(cron)
    } catch (error) {
      res.status(400).send({ message: error.detail || error.message })
    }
  }
}

export { CronsController }
