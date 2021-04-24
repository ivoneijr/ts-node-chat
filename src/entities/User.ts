import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
class User {
  @PrimaryColumn()
  id: string

  @Column()
  email: string

  @CreateDateColumn()
  updated_at: Date

  @UpdateDateColumn()
  created_at: Date

  constructor() {
    this.id = this.id || uuid()
  }
}

export { User }
