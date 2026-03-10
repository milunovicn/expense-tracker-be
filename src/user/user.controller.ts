import * as nCommon from '@nestjs/common';
import { Service } from './user.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import * as models from '../models'

// TODO: Create an interface that all controllers should implement
@nCommon.Controller('user')
export class Controller {
  constructor(private readonly userService: Service) {}

    @nCommon.UseGuards(JwtAuthGuard)
  @nCommon.Get()
  list(): Promise<models.entities.User[]> {
    return this.userService.list();
  }

  @nCommon.UseGuards(JwtAuthGuard)
  @nCommon.Get(':id')
  get(@nCommon.Param('id') id: number): Promise<models.entities.User | null> {
    return this.userService.get(id);
  }

  @nCommon.Post()
  register(user: models.entities.User): void {
    // TODO: Registration logic
  }

}
