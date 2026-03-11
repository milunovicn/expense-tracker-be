import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as user from '../user'
import * as bcrypt from 'bcrypt';
import * as models from '../models'
import * as authModels from './models'

@Injectable()
export class Service {
  constructor(private jwtService: JwtService, private usersService: user.Service) {}

  async login({username, password}: models.entities.User.Credentials) {
    const user = await this.usersService.getByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const payload: authModels.JwtPayload = { userId: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
