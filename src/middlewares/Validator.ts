import { Request, Response, NextFunction } from 'express'
import { Schema } from 'joi'

interface IValidator {
  params?: Schema
  query?: Schema
  body?: Schema
}

class Validator {
  static schema: IValidator

  static validate(schema: IValidator) {
    return this.makeValidation.bind(schema)
  }

  static makeValidation(req: Request, res: Response, next: NextFunction) {
    const errors = []
    const schema = this

    Object.keys(schema).map(k => {
      const { error } = schema[k].validate(req[k])

      if (error) errors.push({ type: `${k} validation`, error })

      return k
    })

    if (errors.length === 0) {
      return next()
    }

    return res.status(400).send({ message: 'Validation Error', errors })
  }
}

export { Validator }
