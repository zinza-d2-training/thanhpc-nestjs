import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province, District, Ward } from 'src/typeorm';
import { ExportUnitAdministrativeService } from './services/export-unit-administrative/export-unit-administrative.service';

@Module({
  imports: [TypeOrmModule.forFeature([Province, District, Ward])],
  providers: [ExportUnitAdministrativeService],
  exports: [ExportUnitAdministrativeService],
})
export class ExportUnitAdministrativeModule {}
