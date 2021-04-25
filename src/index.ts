import dotenv from 'dotenv'
import { Server } from 'http'
import express from 'express'
import init from './config/initializers'
import { Logger } from './helpers/Logger'

dotenv.config({ path: '.env' })
require('checkenv').check()

const { PORT } = process.env

const server: Server = init(express())

server.listen(PORT, () => Logger.info(`🚀 API running on port ${PORT}`))
