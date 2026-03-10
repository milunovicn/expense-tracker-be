import * as nCommon from '@nestjs/common';
import { Controller } from './user.controller';
import { Service } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as models from '../models'

@nCommon.Module({
  imports: [
    TypeOrmModule.forFeature([models.entities.User]) // Register the repository
  ],
  controllers: [Controller],
  providers: [Service],
  exports: [Service],
})
export class Module {}
