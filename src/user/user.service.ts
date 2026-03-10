import { Injectable, NotFoundException } from '@nestjs/common'
import * as models from '../models'

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Service implements models.service.Service<models.entities.User>{

  constructor(
    @InjectRepository(models.entities.User)
    private usersRepository: Repository<models.entities.User>
  ) {}

  async get(id: number): Promise<models.entities.User | null> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if(!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

  async getByUsername(username: string): Promise<models.entities.User | null> {
    const user = await this.usersRepository.findOne({ where: { username } })
    if(!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }
}
