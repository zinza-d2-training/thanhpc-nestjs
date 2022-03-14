import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from 'src/entities/Province';
import { District } from 'src/entities/District';
import { Ward } from 'src/entities/Ward';
import { ExportUnitAdministrativeService } from './services/export-unit-administrative/export-unit-administrative.service';

@Module({
  imports: [TypeOrmModule.forFeature([Province, District, Ward])],
  providers: [ExportUnitAdministrativeService],
  exports: [ExportUnitAdministrativeService],
})
export class ExportUnitAdministrativeModule {}
