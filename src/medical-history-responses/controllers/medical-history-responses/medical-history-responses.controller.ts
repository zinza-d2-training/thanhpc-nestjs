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
import { CreateMedicalHistoryResponseDto } from 'src/medical-history-responses/dto/CreateMedicalHistoryResponseDto';
import { UpdateMedicalHistoryResponseDto } from 'src/medical-history-responses/dto/UpdateMedicalHistoryResponseDto';
import { MedicalHistoryResponsesService } from 'src/medical-history-responses/services/medical-history-responses/medical-history-responses.service';
import { DeleteResult } from 'typeorm';

@Controller('medical-history-responses')
export class MedicalHistoryResponsesController {
  constructor(
    @Inject('MEDICAL_HISTORY_RESPONSES_SERVICE')
    private readonly medicalHistoryResponsesService: MedicalHistoryResponsesService,
  ) {}
  @Get('')
  @UseInterceptors(ClassSerializerInterceptor)
  async getMedicalHistoryResponses() {
    return await this.medicalHistoryResponsesService.getMedicalHistoryResponses();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  async createMedicalHistoryResponse(
    @Body() createMedicalHistoryResponseDto: CreateMedicalHistoryResponseDto,
  ) {
    return await this.medicalHistoryResponsesService.createMedicalHistoryResponse(
      createMedicalHistoryResponseDto,
    );
  }
  @Put('update')
  async updateMedicalHistoryResponse(
    @Body() body: UpdateMedicalHistoryResponseDto,
  ) {
    return await this.medicalHistoryResponsesService.updateMedicalHistoryResponse(
      body,
    );
  }
  @Delete('delete/:id')
  async deleteMedicalHistoryResponse(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    return await this.medicalHistoryResponsesService.deleteMedicalHistoryResponse(
      id,
    );
  }
}
