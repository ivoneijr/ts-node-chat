import winston from 'winston'

// const { Loggly } = require('winston-loggly-bulk')

const configs = {
  levels: {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: 7,
  },
  colors: {
    error: 'redBG',
    warning: 'yellowBG',
    info: 'blueBG',
  },
  timestamp: winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
}

const getTransports = async () => {
  // const { DEBUG, LOGGLY_TOKEN, LOGGLY_SUBDOMAIN, LOGGLY_TAGS } = process.env

  const transports = []

  if (process.env.DEBUG) {
    winston.addColors(configs.colors)

    transports.push(
      new winston.transports.Console({
        format: winston.format.combine(
          configs.timestamp,
          winston.format.colorize(),
          winston.format.simple()
        ),
      })
    )
  }

  // transports.push(
  //   new Loggly({
  //     token: LOGGLY_TOKEN,
  //     subdomain: LOGGLY_SUBDOMAIN,
  //     tags: [LOGGLY_TAGS],
  //     json: true,
  //   })
  // )

  return transports
}

export default async (): Promise<void> => {
  winston.configure({
    exitOnError: false,
    transports: await getTransports(),
    levels: configs.levels,
  })
}
