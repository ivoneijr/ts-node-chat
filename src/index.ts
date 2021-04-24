import dotenv from 'dotenv'
import { Server } from 'http'
import express from 'express'
import init from './config/initializers'

dotenv.config({ path: '.env' })
require('checkenv').check()

const { PORT } = process.env

const server: Server = init(express())

server.listen(PORT, () => console.log(`🚀 API running on port ${PORT}`))
