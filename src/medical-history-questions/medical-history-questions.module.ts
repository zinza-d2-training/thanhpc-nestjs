import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalHistoryQuestion } from 'src/entities/MedicalHistoryQuestion';
import { MedicalHistoryResponse } from 'src/entities/MedicalHistoryResponse';
import { MedicalHistoryQuestionsController } from './controllers/medical-history-questions/medical-history-questions.controller';
import { MedicalHistoryQuestionsService } from './services/medical-history-questions/medical-history-questions.service';

@Module({
  controllers: [MedicalHistoryQuestionsController],
  imports: [
    TypeOrmModule.forFeature([MedicalHistoryQuestion, MedicalHistoryResponse]),
  ],
  providers: [
    {
      provide: 'MEDICAL_HISTORY_QUESTIONS_SERVICE',
      useClass: MedicalHistoryQuestionsService,
    },
  ],
})
export class MedicalHistoryQuestionsModule {}
