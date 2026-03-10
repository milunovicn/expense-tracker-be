import { Injectable, NotFoundException } from '@nestjs/common'
import * as models from '../models'
import * as bcrypt from 'bcrypt';
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

  async create(user: models.entities.User.ForCreate): Promise<models.entities.User> {
    // TODO: Error handling and validation, check if user with the same username
    // exists, etc.
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = this.usersRepository.create({ ...user, password: hashedPassword })
    return await this.usersRepository.save(newUser)
  }



  async getByUsername(username: string): Promise<models.entities.User | null> {
    const user = await this.usersRepository.findOne({ where: { username } })
    if(!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

}
