import * as nCommon from '@nestjs/common';
import { Controller } from './user.controller';
import { Service } from './user.service';

@nCommon.Module({
  imports: [],
  controllers: [Controller],
  providers: [Service],
  exports: [Service],
})
export class Module {}
