import * as nstCommon from '@nestjs/common';
import { Service } from './user.service';

@nstCommon.Controller('user')
export class Controller {
  constructor(private readonly userService: Service) {}

  @nstCommon.Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
