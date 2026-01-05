import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as user from './user'
import * as auth from './auth'

@Module({
  imports: [user.Module, auth.Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
