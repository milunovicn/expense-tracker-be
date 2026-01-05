import * as nCommon from '@nestjs/common';
import { Service } from './user.service';
import { JwtAuthGuard } from '../auth/auth.guard';

// TODO: Create an interface that all controllers should implement
@nCommon.Controller('user')
export class Controller {
  constructor(private readonly userService: Service) {}

  @nCommon.UseGuards(JwtAuthGuard)
  @nCommon.Get(':id')
  get(@nCommon.Param('id') id: string): object | undefined {
    return this.userService.get(id);
  }
}
