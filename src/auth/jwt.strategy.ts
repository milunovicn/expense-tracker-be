import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as models from './models'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'super-secret-key',
    });
  }

  // This method is called when the user signs in, and the JWT is validated. The payload is the decoded JWT payload.
  async validate(payload: models.JwtPayload) {
    return { userId: payload.userId, username: payload.username };
  }
}