/* eslint-disable global-require */
import express from 'express'
import path from 'path'

export default (app: express.Application): void => {
  app.use(express.static(path.join(__dirname, '../../../', 'public')))
  app.set('views', path.join(__dirname, '../../../', 'public'))
  app.engine('html', require('ejs').renderFile)

  app.set('view engine', 'html')

  app.get('/preview/client', (req, res) => {
    res.set(
      'Content-Security-Policy',
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )
    return res.render('preview/html/client.html')
  })

  app.get('/preview/admin', (req, res) => {
    res.set(
      'Content-Security-Policy',
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )
    return res.render('preview/html/admin.html')
  })

  app.get('/docs', (req, res) => {
    return res.render('docs/index.html')
  })
}
