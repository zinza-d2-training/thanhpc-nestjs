import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateVaccinationSiteDto } from 'src/vaccination-sites/dto/CreateVaccinationSiteDto';
import { UpdateVaccinationSiteDto } from 'src/vaccination-sites/dto/UpdateVaccinationSiteDto';
import { VaccinationSitesService } from 'src/vaccination-sites/services/vaccination-sites/vaccination-sites.service';
import { DeleteResult } from 'typeorm';

@Controller('vaccination-sites')
export class VaccinationSitesController {
  constructor(
    @Inject('VACCINATION_SITES_SERVICE')
    private readonly vaccinationSitesService: VaccinationSitesService,
  ) {}
  @Get('')
  @UseInterceptors(ClassSerializerInterceptor)
  async getVaccinationSites() {
    return await this.vaccinationSitesService.getVaccinationSites();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  async createVaccinationSite(
    @Body() createVaccinationSiteDto: CreateVaccinationSiteDto,
  ) {
    return await this.vaccinationSitesService.createVaccinationSite(
      createVaccinationSiteDto,
    );
  }
  @Put('update')
  async updateVaccinationSite(@Body() body: UpdateVaccinationSiteDto) {
    return await this.vaccinationSitesService.updateVaccinationSite(body);
  }
  @Delete('delete/:id')
  async deleteVaccinationSite(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    return await this.vaccinationSitesService.deleteVaccinationSite(id);
  }
}
