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
import { CreatePersonalInformationDto } from 'src/personal-informations/dto/CreatePersonalInformationDto';
import { UpdatePersonalInformationDto } from 'src/personal-informations/dto/UpdatePersonalInformationDto';
import { PersonalInformationsService } from 'src/personal-informations/services/personal-informations/personal-informations.service';
import { DeleteResult } from 'typeorm';

@Controller('personal-informations')
export class PersonalInformationsController {
  constructor(
    @Inject('PERSONAL_INFORMATIONS_SERVICE')
    private readonly personalInformationsService: PersonalInformationsService,
  ) {}
  @Get('')
  @UseInterceptors(ClassSerializerInterceptor)
  async getPersonalInformations() {
    return await this.personalInformationsService.getPersonalInformations();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  async createPersonalInformation(
    @Body() createPersonalInformationDto: CreatePersonalInformationDto,
  ) {
    return await this.personalInformationsService.createPersonalInformation(
      createPersonalInformationDto,
    );
  }
  @Put('update')
  async updatePersonalInformation(@Body() body: UpdatePersonalInformationDto) {
    return await this.personalInformationsService.updatePersonalInformation(
      body,
    );
  }
  @Delete('delete/:id')
  async deletePersonalInformation(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    return await this.personalInformationsService.deletePersonalInformation(id);
  }
}
