import { Test, TestingModule } from '@nestjs/testing';
import { MedicalHistoryQuestionsService } from './medical-history-questions.service';

describe('MedicalHistoryQuestionsService', () => {
  let service: MedicalHistoryQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalHistoryQuestionsService],
    }).compile();

    service = module.get<MedicalHistoryQuestionsService>(MedicalHistoryQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
