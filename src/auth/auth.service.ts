import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Service {
  constructor(private jwtService: JwtService) {}

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

  getHello(): string {
    return 'Hello World!';
  }
}
