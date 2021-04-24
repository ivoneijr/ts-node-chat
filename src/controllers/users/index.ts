import { Request, Response } from 'express'
import { UsersService } from '../../services/users'

class UsersController {
  create = async (req: Request, res: Response) => {
    try {
      const { email } = req.body
      const usersService = new UsersService()

      const user = await usersService.create({ email })

      res.status(201).send(user)
    } catch (error) {
      res.status(400).send({ message: error.detail || error.message })
    }
  }
}

export { UsersController }
