import { VaccinationSite } from './../entities/VaccinationSite';
import { Module } from '@nestjs/common';
import { VaccinationSitesController } from './controllers/vaccination-sites/vaccination-sites.controller';
import { VaccinationSitesService } from './services/vaccination-sites/vaccination-sites.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [VaccinationSitesController],
  imports: [TypeOrmModule.forFeature([VaccinationSite])],
  providers: [
    {
      provide: 'VACCINATION_SITES_SERVICE',
      useClass: VaccinationSitesService,
    },
  ],
})
export class VaccinationSitesModule {}
