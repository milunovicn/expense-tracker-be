import * as nstCommon from '@nestjs/common';
import { Service } from './auth.service';

@nstCommon.Controller()
export class Controller {
  constructor(private readonly authService: Service) {}

  @nstCommon.Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @nstCommon.Post('login')
  login(@nstCommon.Body() { username, password }: { username: string; password: string }) {
    return this.authService.login(username, password);
  }
}
