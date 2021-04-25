const winston = require('winston')

const levels = { INFO: 'info', ERROR: 'error', WARNING: 'warning' }
const { INFO, ERROR, WARNING } = levels

class Logger {
  static async log({ level, message }) {
    winston.log({
      level,
      message,
    })
  }

  static async error(err: any) {
    this.log({ level: ERROR, message: err })
  }

  static async warning(message: {}) {
    this.log({ level: WARNING, message })
  }

  static async info(message: {}) {
    this.log({ level: INFO, message: JSON.stringify(message) })
  }
}

export { Logger }
