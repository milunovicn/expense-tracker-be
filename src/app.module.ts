import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as user from './user'
import * as auth from './auth'
import { TypeOrmModule } from '@nestjs/typeorm';

// TODO: Probably move to env. file. Env file should go to .gitignore, at least
// for deployed versions, local testing versions are fine to have it in the
// repo, but we should be careful about that
@Module({
  imports: [user.Module, auth.Module, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'expenseTracker',
      autoLoadEntities: true,
      synchronize: false,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
