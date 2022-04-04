import { Test, TestingModule } from '@nestjs/testing';
import { VaccineRegistrationsService } from './vaccine-registrations.service';

describe('VaccineRegistrationsService', () => {
  let service: VaccineRegistrationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaccineRegistrationsService],
    }).compile();

    service = module.get<VaccineRegistrationsService>(VaccineRegistrationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
