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
  imports: [user.Module,
    auth.Module,
    // TODO: Find a way to make a connection to database more flexible, so that
    // we can run the application without the DB actually existing, since this
    // connection is needed for the application to start, but we want to be able
    // to run it without the DB for testing purposes, etc.
    TypeOrmModule.forRoot({
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
  providers: [],
})
export class AppModule {}
