import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// TODO: Add class validator pnpm add class-validator class-transformer TODO:
// Potentially expand the fund entity to include more currencies in one fund,
// etc. For now, we will keep it simple and just have one currency per fund, but
// in the future we might want to expand it to include more currencies, etc.
@Entity({ name: 'funds', schema: 'public' })
export class Fund {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ unique: true })
  userId: number
  @Column()
  amount: string
  @Column()
  currency: string
  // TODO: History of transactions
  history: any[]
}

export namespace Fund  {
  export type ForCreate = Omit<Fund, 'id'>
  // NOTE: We do not have a separate DTO type for the Fund entity, since we do
  // not have any sensitive information that we want to exclude from the DTO,
  // but we might want to add it in the future, etc.
}