import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import * as models from '../models'
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Service implements models.service.Service<models.entities.Fund, models.entities.Fund.ForCreate> {

  constructor(
    @InjectRepository(models.entities.Fund)
    private fundsRepository: Repository<models.entities.Fund>
  ) {}

  async list(): Promise<models.entities.Fund[]> {
    return await this.fundsRepository.find()
  }

  async get(id: number): Promise<models.entities.Fund | null> {
    const fund = await this.fundsRepository.findOne({ where: { id } })
    if(!fund) {
      throw new NotFoundException('Fund not found')
    }
    return fund
  }

  async create(fund: models.entities.Fund.ForCreate): Promise<models.entities.Fund> {
    const newFund = this.fundsRepository.create(fund)
    const savedFund = await this.fundsRepository.save(newFund)
    return savedFund
  }

  async getByUserId(id: number): Promise<models.entities.Fund[] | null> {
    const funds = await this.fundsRepository.find({ where: { userId: id } })
    return funds
  }

}
