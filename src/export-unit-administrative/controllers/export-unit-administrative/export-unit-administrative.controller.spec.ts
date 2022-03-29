import { Test, TestingModule } from '@nestjs/testing';
import { ExportUnitAdministrativeController } from './export-unit-administrative.controller';

describe('ExportUnitAdministrativeController', () => {
  let controller: ExportUnitAdministrativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportUnitAdministrativeController],
    }).compile();

    controller = module.get<ExportUnitAdministrativeController>(ExportUnitAdministrativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
