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
import { CreateVaccineRegistrationDto } from 'src/vaccine-registrations/dto/CreateVaccineRegistrationDto';
import { UpdateVaccineRegistrationDto } from 'src/vaccine-registrations/dto/UpdateVaccineRegistrationDto';
import { VaccineRegistrationsService } from 'src/vaccine-registrations/services/vaccine-registrations/vaccine-registrations.service';
import { DeleteResult } from 'typeorm';

@Controller('vaccine-registrations')
export class VaccineRegistrationsController {
  constructor(
    @Inject('VACCINE_REGISTRATIONS_SERVICE')
    private readonly vaccineRegistrationsService: VaccineRegistrationsService,
  ) {}
  @Get('')
  @UseInterceptors(ClassSerializerInterceptor)
  async getVaccineRegistrations() {
    return await this.vaccineRegistrationsService.getVaccineRegistrations();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  async createVaccineRegistration(
    @Body() createVaccineRegistrationDto: CreateVaccineRegistrationDto,
  ) {
    return await this.vaccineRegistrationsService.createVaccineRegistration(
      createVaccineRegistrationDto,
    );
  }
  @Put('update')
  async updateVaccineRegistration(@Body() body: UpdateVaccineRegistrationDto) {
    return await this.vaccineRegistrationsService.updateVaccineRegistration(
      body,
    );
  }
  @Delete('delete/:id')
  async deleteVaccineRegistration(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    return await this.vaccineRegistrationsService.deleteVaccineRegistration(id);
  }
}
