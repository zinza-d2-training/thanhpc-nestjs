import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalHistoryQuestion } from 'src/entities/MedicalHistoryQuestion';
import { MedicalHistoryResponse } from 'src/entities/MedicalHistoryResponse';
import { VaccineRegistration } from 'src/entities/VaccineRegistration';
import { MedicalHistoryResponsesController } from './controllers/medical-history-responses/medical-history-responses.controller';
import { MedicalHistoryResponsesService } from './services/medical-history-responses/medical-history-responses.service';

@Module({
  controllers: [MedicalHistoryResponsesController],
  imports: [
    TypeOrmModule.forFeature([
      MedicalHistoryQuestion,
      MedicalHistoryResponse,
      VaccineRegistration,
    ]),
  ],
  providers: [
    {
      provide: 'MEDICAL_HISTORY_RESPONSES_SERVICE',
      useClass: MedicalHistoryResponsesService,
    },
  ],
})
export class MedicalHistoryResponsesModule {}
