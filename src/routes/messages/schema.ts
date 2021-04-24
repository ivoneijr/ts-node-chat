import Joi from 'joi'
import { Validator } from '../../middlewares/Validator'

class Schema extends Validator {
  static get create() {
    const schema = {
      body: Joi.object({
        user_id: Joi.string().required(),
        text: Joi.string().required(),
        admin_id: Joi.string(),
      }),
    }

    return this.validate(schema)
  }
}

export { Schema }
