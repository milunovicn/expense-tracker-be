import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as user from './user'

@Module({
  imports: [user.Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
