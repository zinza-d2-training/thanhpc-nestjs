import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInformationsService } from './personal-informations.service';

describe('PersonalInformationsService', () => {
  let service: PersonalInformationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalInformationsService],
    }).compile();

    service = module.get<PersonalInformationsService>(PersonalInformationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
