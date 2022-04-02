import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInformationsController } from './personal-informations.controller';

describe('PersonalInformationsController', () => {
  let controller: PersonalInformationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalInformationsController],
    }).compile();

    controller = module.get<PersonalInformationsController>(PersonalInformationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
