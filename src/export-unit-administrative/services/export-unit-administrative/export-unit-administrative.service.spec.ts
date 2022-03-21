import { Test, TestingModule } from '@nestjs/testing';
import { ExportUnitAdministrativeService } from './export-unit-administrative.service';

describe('ExportUnitAdministrativeService', () => {
  let service: ExportUnitAdministrativeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExportUnitAdministrativeService],
    }).compile();

    service = module.get<ExportUnitAdministrativeService>(
      ExportUnitAdministrativeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
