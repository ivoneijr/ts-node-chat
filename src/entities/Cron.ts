import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('crons')
class Cron {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  value: string

  @CreateDateColumn()
  updated_at: Date

  @UpdateDateColumn()
  created_at: Date

  constructor() {
    this.id = this.id || uuid()
  }
}

export { Cron }
