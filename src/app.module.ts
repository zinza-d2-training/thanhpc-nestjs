import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConsoleModule } from '@squareboat/nest-console';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ExportUnitAdministrativeModule } from './export-unit-administrative/export-unit-administrative.module';
import { TypeormModule } from './typeorm/typeorm.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { VaccinationSitesModule } from './vaccination-sites/vaccination-sites.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PersonalInformationsModule } from './personal-informations/personal-informations.module';
import { VaccineRegistrationsModule } from './vaccine-registrations/vaccine-registrations.module';
import { MedicalHistoryQuestionsModule } from './medical-history-questions/medical-history-questions.module';
import { MedicalHistoryResponsesModule } from './medical-history-responses/medical-history-responses.module';

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
    VaccinationSitesModule,
    PersonalInformationsModule,
    VaccineRegistrationsModule,
    MedicalHistoryQuestionsModule,
    MedicalHistoryResponsesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('vaccination-sites');
  }
}
