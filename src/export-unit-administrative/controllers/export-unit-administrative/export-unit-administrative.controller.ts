import { ExportUnitAdministrativeService } from './../../services/export-unit-administrative/export-unit-administrative.service';
import { Body, Controller, Get, Inject, Put } from '@nestjs/common';
import { DistributionUpdateDto } from 'src/export-unit-administrative/dto/distributionUpdateDto';

@Controller('export-unit-administrative')
export class ExportUnitAdministrativeController {
  constructor(
    @Inject('EXPORT_UNIT_ADMINISTRATIVE_SERVER')
    private readonly exportUnitAdministrativeService: ExportUnitAdministrativeService,
  ) {}
  @Get('')
  async getUnitAdministrative() {
    return await this.exportUnitAdministrativeService.getUnitAdministrative();
  }
  @Put('distribution-update')
  async distributionUpdate(@Body() body: DistributionUpdateDto) {
    return await this.exportUnitAdministrativeService.distributionUpdate(body);
  }
}
