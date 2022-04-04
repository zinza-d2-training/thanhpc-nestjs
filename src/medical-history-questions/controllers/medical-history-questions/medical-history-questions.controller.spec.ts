import { Test, TestingModule } from '@nestjs/testing';
import { MedicalHistoryQuestionsController } from './medical-history-questions.controller';

describe('MedicalHistoryQuestionsController', () => {
  let controller: MedicalHistoryQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalHistoryQuestionsController],
    }).compile();

    controller = module.get<MedicalHistoryQuestionsController>(MedicalHistoryQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
