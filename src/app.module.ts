import { Module } from '@nestjs/common';
import { ConsoleModule } from '@squareboat/nest-console';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ExportUnitAdministrativeModule } from './export-unit-administrative/export-unit-administrative.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeormModule.forRoot(),
    ConsoleModule,
    UserModule,
    ExportUnitAdministrativeModule,
    AuthModule,
    MulterModule.register({
      dest: './dist/files',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
