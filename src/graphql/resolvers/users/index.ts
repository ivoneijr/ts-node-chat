import { Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '../../../entities/User'
import { UsersService } from '../../../services/users'

@Resolver(User)
export class UsersResolver {
  @Mutation(() => User)
  async createUser(@Arg('email') email: string): Promise<User> {
    const usersService = new UsersService()

    return usersService.create({ email })
  }
}
