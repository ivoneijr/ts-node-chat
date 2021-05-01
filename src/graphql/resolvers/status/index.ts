import { Resolver, Query } from 'type-graphql'

@Resolver()
export class StatusResolver {
  @Query(() => String)
  async status() {
    return `Its Alive!`
  }
}
