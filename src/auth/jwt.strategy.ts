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

  // This method is called when the user request is protected by authentication.
  // The payload is the decoded JWT.
  // NOTE: This method returns the object because we trust the JWT token, but
  // ideally we should check if that user exists in the database and return the
  // user object, but for simplicity we will just return the payload as the user
  // object.
  // NOTE: We could also just put id into the jwt, and then fetch the user from
  // the database in the validate method
  async validate(payload: models.JwtPayload) {
    return { userId: payload.userId, username: payload.username }
  }
}