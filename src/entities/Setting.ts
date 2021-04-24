import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('settings')
class Setting {
  @PrimaryColumn({ unique: true })
  id: string

  @Column()
  username: string

  @Column()
  chat: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    this.id = this.id || uuid()
  }
}

export { Setting }
