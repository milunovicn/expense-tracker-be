import * as nstCommon from '@nestjs/common';
import { Controller } from './auth.controller';
import { Service } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@nstCommon.Module({
  imports: [JwtModule.register({
      secret: 'super-secret-key',
      signOptions: { expiresIn: '1h' },
    }), PassportModule],
  controllers: [Controller],
  providers: [Service],
})
export class Module {}
