import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalHistoryQuestion } from 'src/entities/MedicalHistoryQuestion';
import { CreateMedicalHistoryQuestionDto } from 'src/medical-history-questions/dto/CreateMedicalHistoryQuestionDto';
import { UpdateMedicalHistoryQuestionDto } from 'src/medical-history-questions/dto/UpdateMedicalHistoryQuestionDto';
import { Repository } from 'typeorm';

@Injectable()
export class MedicalHistoryQuestionsService {
  constructor(
    @InjectRepository(MedicalHistoryQuestion)
    private readonly medicalHistoryQuestionRepository: Repository<MedicalHistoryQuestion>,
  ) {}
  async getMedicalHistoryQuestions(): Promise<MedicalHistoryQuestion[]> {
    return await this.medicalHistoryQuestionRepository.find();
  }
  async createMedicalHistoryQuestion(
    createMedicalHistoryQuestionDto: CreateMedicalHistoryQuestionDto,
  ) {
    const newMedicalHistoryQuestion =
      await this.medicalHistoryQuestionRepository.create(
        createMedicalHistoryQuestionDto,
      );
    return {
      status: 200,
      message: 'Thêm câu hỏi thành công!!',
      data: await this.medicalHistoryQuestionRepository.save(
        newMedicalHistoryQuestion,
      ),
    };
  }
  async deleteMedicalHistoryQuestionById(id: number): Promise<void> {
    await this.medicalHistoryQuestionRepository.delete(id);
  }
  async updateMedicalHistoryQuestion(body: UpdateMedicalHistoryQuestionDto) {
    const { id } = body;
    await this.medicalHistoryQuestionRepository.update({ id }, body);
    return {
      status: 200,
      message: 'Cập nhật thành công!',
    };
  }
  async deleteMedicalHistoryQuestion(id: number) {
    return await this.medicalHistoryQuestionRepository.delete(id);
  }
}
