import { Test, TestingModule } from '@nestjs/testing';
import { MedicalHistoryResponsesService } from './medical-history-responses.service';

describe('MedicalHistoryResponsesService', () => {
  let service: MedicalHistoryResponsesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalHistoryResponsesService],
    }).compile();

    service = module.get<MedicalHistoryResponsesService>(MedicalHistoryResponsesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
