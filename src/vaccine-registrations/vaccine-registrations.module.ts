import { Module } from '@nestjs/common';
import { VaccineRegistrationsController } from './controllers/vaccine-registrations/vaccine-registrations.controller';
import { VaccineRegistrationsService } from './services/vaccine-registrations/vaccine-registrations.service';

@Module({
  controllers: [VaccineRegistrationsController],
  providers: [VaccineRegistrationsService]
})
export class VaccineRegistrationsModule {}
