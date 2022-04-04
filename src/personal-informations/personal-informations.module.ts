import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Injection } from 'src/entities/Injection';
import { MedicalHistoryQuestion } from 'src/entities/MedicalHistoryQuestion';
import { MedicalHistoryResponse } from 'src/entities/MedicalHistoryResponse';
import { PersonalInformation } from 'src/entities/PersonalInformation';
import { PriorityGroup } from 'src/entities/PriorityGroup';
import { VaccineRegistration } from 'src/entities/VaccineRegistration';
import { PersonalInformationsController } from './controllers/personal-informations/personal-informations.controller';
import { PersonalInformationsService } from './services/personal-informations/personal-informations.service';

@Module({
  controllers: [PersonalInformationsController],
  imports: [
    TypeOrmModule.forFeature([
      PersonalInformation,
      PriorityGroup,
      VaccineRegistration,
      MedicalHistoryQuestion,
      MedicalHistoryResponse,
      Injection,
    ]),
  ],
  providers: [
    {
      provide: 'PERSONAL_INFORMATIONS_SERVICE',
      useClass: PersonalInformationsService,
    },
  ],
})
export class PersonalInformationsModule {}
