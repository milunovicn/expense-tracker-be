import * as nstCommon from '@nestjs/common';
import { Service } from './auth.service';

@nstCommon.Controller()
export class Controller {
  constructor(private readonly authService: Service) {}
  
  @nstCommon.Post('login')
  login(@nstCommon.Body() { username, password }: { username: string; password: string }) {
    return this.authService.login(username, password);
  }
}
