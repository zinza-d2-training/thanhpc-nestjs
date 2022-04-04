import { Test, TestingModule } from '@nestjs/testing';
import { MedicalHistoryResponsesController } from './medical-history-responses.controller';

describe('MedicalHistoryResponsesController', () => {
  let controller: MedicalHistoryResponsesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalHistoryResponsesController],
    }).compile();

    controller = module.get<MedicalHistoryResponsesController>(MedicalHistoryResponsesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
