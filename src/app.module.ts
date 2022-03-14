import { Module } from '@nestjs/common';
import { ConsoleModule } from '@squareboat/nest-console';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { ExportUnitAdministrativeModule } from './export-unit-administrative/export-unit-administrative.module';
import entities from './typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'covid_tracker',
      entities: entities,
      synchronize: true,
    }),
    ConsoleModule,
    UserModule,
    ExportUnitAdministrativeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
