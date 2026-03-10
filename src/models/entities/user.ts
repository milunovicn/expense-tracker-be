import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users', schema: 'public' })
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ unique: true })
  username: string
  @Column()
  email: string
  /** 
   * Hashed password value. Using bcrypt for hashing
  */
  @Column()
  password: string
}

export namespace User {
  export type Credentials = Pick<User, 'username' | 'password'>
}