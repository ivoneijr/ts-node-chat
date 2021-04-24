import dotenv from 'dotenv'
import { Server } from 'http'
import express from 'express'
import init from './config/initializers'

dotenv.config({ path: '.env' })

const { PORT } = process.env

const server: Server = init(express())

server.listen(PORT, async () => console.log(`🚀 API running on port ${PORT}`))
