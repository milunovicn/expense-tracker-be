import * as nCommon from '@nestjs/common';
import { Controller } from './auth.controller';
import { Service } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as user from '../user'
import { JwtStrategy } from './jwt.strategy';

@nCommon.Module({
  imports: [JwtModule.register({
      secret: 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }), PassportModule, user.Module],
  controllers: [Controller],
  providers: [Service, JwtStrategy],
})
export class Module {}
