import * as nCommon from '@nestjs/common';
import { Service } from './auth.service';
import * as models from '../models'

@nCommon.Controller()
export class Controller {
  constructor(private readonly authService: Service) {}
  
  // NOTE: We don't actually take hashed password from the frontend because
  // HTPPS encrypts the whole request anyway
  @nCommon.Post('login')
  login(@nCommon.Body() { username, password }: models.entities.User.Credentials) {
    return this.authService.login({ username, password });
  }
}
