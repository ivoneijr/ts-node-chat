import Joi from 'joi'
import { Validator } from '../../middlewares/Validator'

class Schema extends Validator {
  static get create() {
    const schema = {
      body: Joi.object({
        name: Joi.string().required(),
        value: Joi.string().required(),
      }),
    }

    return this.validate(schema)
  }
}

export { Schema }
