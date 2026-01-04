import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Service {
  constructor(private jwtService: JwtService) {}

  // TODO: Implement when user service is done
  // TODO: Change to structured parameter e.g { username: string; password: string }
  // TODO: Add proper return type and proper type for params
  async login(username: string, password: string) {
    // const user = this.usersService.findByUsername(username);

    // if (!user || !(await bcrypt.compare(password, user.password))) {
    //   throw new UnauthorizedException();
    // }

    // const payload = { sub: user.id, username: user.username };
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
}
