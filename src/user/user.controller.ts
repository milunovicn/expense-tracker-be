import * as nCommon from '@nestjs/common';
import { Service } from './user.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import * as models from '../models'

// TODO: Create an interface that all controllers should implement
@nCommon.Controller('user')
export class Controller {
  constructor(private readonly userService: Service) {}

  // TODO: We should probably just return some UserDTO which wouldn't send
  // password to the frontend, but for simplicity we will just return the whole
  // user object for now
  @nCommon.UseGuards(JwtAuthGuard)
  @nCommon.Get(':id')
  get(@nCommon.Param('id') id: number): Promise<models.entities.User | null> {
    return this.userService.get(id);
  }

  @nCommon.Post('register')
  create(@nCommon.Body() user: models.entities.User.ForCreate): void {
    this.userService.create(user)
  }

}
