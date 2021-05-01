import { GraphQLSchema } from 'graphql'
import { Application, Request, Response, NextFunction } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { useSchema } from '../../graphql/resolvers'

export default async (app: Application) => {
  app.get('/graphql', (req: Request, res: Response, next: NextFunction) => {
    res.set(
      'Content-Security-Policy',
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )

    next()
  })

  const schema = (await useSchema()) as GraphQLSchema

  const server = new ApolloServer({ schema })
  await server.start()

  server.applyMiddleware({ app })
}
