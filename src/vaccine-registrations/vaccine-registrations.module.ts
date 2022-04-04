import { VaccineRegistration } from './../entities/VaccineRegistration';
import { Module } from '@nestjs/common';
import { VaccineRegistrationsController } from './controllers/vaccine-registrations/vaccine-registrations.controller';
import { VaccineRegistrationsService } from './services/vaccine-registrations/vaccine-registrations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalHistoryResponse } from 'src/entities/MedicalHistoryResponse';
import { PersonalInformation } from 'src/entities/PersonalInformation';

@Module({
  controllers: [VaccineRegistrationsController],
  imports: [
    TypeOrmModule.forFeature([
      VaccineRegistration,
      MedicalHistoryResponse,
      PersonalInformation,
    ]),
  ],
  providers: [
    {
      provide: 'VACCINE_REGISTRATIONS_SERVICE',
      useClass: VaccineRegistrationsService,
    },
  ],
})
export class VaccineRegistrationsModule {}
