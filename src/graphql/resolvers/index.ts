import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import { StatusResolver } from './status'
import { UsersResolver } from './users'

export const useSchema = async (): Promise<GraphQLSchema> => {
  const schema = await buildSchema({
    resolvers: [StatusResolver, UsersResolver],
  })

  return schema
}
