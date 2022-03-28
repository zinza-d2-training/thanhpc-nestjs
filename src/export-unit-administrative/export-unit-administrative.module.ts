import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from 'src/entities/Province';
import { District } from 'src/entities/District';
import { Ward } from 'src/entities/Ward';
import { ExportUnitAdministrativeService } from './services/export-unit-administrative/export-unit-administrative.service';
import { ExportUnitAdministrativeController } from './controllers/export-unit-administrative/export-unit-administrative.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Province, District, Ward])],
  providers: [
    {
      provide: 'EXPORT_UNIT_ADMINISTRATIVE_SERVER',
      useClass: ExportUnitAdministrativeService,
    },
  ],
  controllers: [ExportUnitAdministrativeController],
})
export class ExportUnitAdministrativeModule {}
