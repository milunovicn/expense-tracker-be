import * as nstCommon from '@nestjs/common';
import { Controller } from './user.controller';
import { Service } from './user.service';

@nstCommon.Module({
  imports: [],
  controllers: [Controller],
  providers: [Service],
})
export class Module {}
