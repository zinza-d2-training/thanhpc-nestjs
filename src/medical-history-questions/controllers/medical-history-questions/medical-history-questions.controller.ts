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
import { CreateMedicalHistoryQuestionDto } from 'src/medical-history-questions/dto/CreateMedicalHistoryQuestionDto';
import { UpdateMedicalHistoryQuestionDto } from 'src/medical-history-questions/dto/UpdateMedicalHistoryQuestionDto';
import { MedicalHistoryQuestionsService } from 'src/medical-history-questions/services/medical-history-questions/medical-history-questions.service';
import { DeleteResult } from 'typeorm';

@Controller('medical-history-questions')
export class MedicalHistoryQuestionsController {
  constructor(
    @Inject('MEDICAL_HISTORY_QUESTIONS_SERVICE')
    private readonly medicalHistoryQuestionsService: MedicalHistoryQuestionsService,
  ) {}
  @Get('')
  @UseInterceptors(ClassSerializerInterceptor)
  async getMedicalHistoryQuestions() {
    return await this.medicalHistoryQuestionsService.getMedicalHistoryQuestions();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  async createMedicalHistoryQuestion(
    @Body() createMedicalHistoryQuestionDto: CreateMedicalHistoryQuestionDto,
  ) {
    return await this.medicalHistoryQuestionsService.createMedicalHistoryQuestion(
      createMedicalHistoryQuestionDto,
    );
  }
  @Put('update')
  async updateMedicalHistoryQuestion(
    @Body() body: UpdateMedicalHistoryQuestionDto,
  ) {
    return await this.medicalHistoryQuestionsService.updateMedicalHistoryQuestion(
      body,
    );
  }
  @Delete('delete/:id')
  async deleteMedicalHistoryQuestion(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResult> {
    return await this.medicalHistoryQuestionsService.deleteMedicalHistoryQuestion(
      id,
    );
  }
}
