import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { v4 as uuid } from 'uuid'

@ObjectType()
@Entity('users')
class User {
  @Field()
  @PrimaryColumn()
  id: string

  @Field()
  @Column()
  email: string

  @Field()
  @CreateDateColumn()
  updated_at: Date

  @Field()
  @UpdateDateColumn()
  created_at: Date

  constructor() {
    this.id = this.id || uuid()
  }
}

export { User }
