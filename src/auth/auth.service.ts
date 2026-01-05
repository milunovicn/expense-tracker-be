import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as user from '../user'
import * as bcrypt from 'bcrypt';
import * as models from '../models'

@Injectable()
export class Service {
  constructor(private jwtService: JwtService, private usersService: user.Service) {}

  // TODO: Implement when user service is done
  // TODO: Change to structured parameter e.g { username: string; password: string }
  // TODO: Add proper return type and proper type for params
  async login({username, password}: models.entities.User.Credentials) {
    const user = this.usersService.getByUsername(username);

    // TODO: Hashing password comparison
    if (!user || password !== user.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
