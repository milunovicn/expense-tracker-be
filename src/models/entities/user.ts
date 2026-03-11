import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// TODO: Add class validator pnpm add class-validator class-transformer
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
  export type ForCreate = Omit<User, 'id'>
  export type DTO = Omit<User, 'password'>
  export function toDTO(user: User): DTO {
    const { password, ...dto } = user
    return dto
  }
}