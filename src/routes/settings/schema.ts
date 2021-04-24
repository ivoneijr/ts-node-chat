import Joi from 'joi'
import { Validator } from '../../middlewares/Validator'

class Schema extends Validator {
  static get show() {
    const schema = {
      params: Joi.object().keys({
        username: Joi.string().required(),
      }),
    }

    return this.validate(schema)
  }

  static get create() {
    const schema = {
      body: Joi.object({
        username: Joi.string().required(),
        chat: Joi.boolean().required(),
      }),
    }

    return this.validate(schema)
  }

  static get patch() {
    const schema = {
      body: Joi.object({
        username: Joi.string(),
        chat: Joi.boolean(),
      }),
    }

    return this.validate(schema)
  }
}

export { Schema }
