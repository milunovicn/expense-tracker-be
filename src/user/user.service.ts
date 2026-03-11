import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common'
import * as models from '../models'
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Service implements models.service.Service<models.entities.User, models.entities.User.ForCreate, models.entities.User.DTO> {

  constructor(
    @InjectRepository(models.entities.User)
    private usersRepository: Repository<models.entities.User>
  ) {}

  async list(): Promise<models.entities.User.DTO[]> {
    return (await this.usersRepository.find()).map(models.entities.User.toDTO)
  }

  async get(id: number): Promise<models.entities.User.DTO | null> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if(!user) {
      throw new NotFoundException('User not found')
    }
    return models.entities.User.toDTO(user)
  }

  async create(user: models.entities.User.ForCreate): Promise<models.entities.User.DTO> {
    // NOTE: There is unique constraint in the database, but we want to catch
    // this error before it happens and throw a more user-friendly error message
    const existingUser = await this.getByUsername(user.username)
    if (!!existingUser) {
      throw new BadRequestException('User with this username already exists')
    }
    if (user.password.length < 6) {
      throw new BadRequestException('Password must be at least 6 characters long')
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = this.usersRepository.create({ ...user, password: hashedPassword })
    const savedUser = await this.usersRepository.save(newUser)
    return models.entities.User.toDTO(savedUser)
  }

  async getByUsername(username: string): Promise<models.entities.User | null> {
    const user = await this.usersRepository.findOne({ where: { username } })
    if(!user) {
      throw new NotFoundException('User not found')
    }
    return user
  }

}
