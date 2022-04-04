import { Test, TestingModule } from '@nestjs/testing';
import { VaccineRegistrationsController } from './vaccine-registrations.controller';

describe('VaccineRegistrationsController', () => {
  let controller: VaccineRegistrationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaccineRegistrationsController],
    }).compile();

    controller = module.get<VaccineRegistrationsController>(VaccineRegistrationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
