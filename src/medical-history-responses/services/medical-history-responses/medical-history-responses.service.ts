import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalHistoryResponse } from 'src/entities/MedicalHistoryResponse';
import { CreateMedicalHistoryResponseDto } from 'src/medical-history-responses/dto/CreateMedicalHistoryResponseDto';
import { UpdateMedicalHistoryResponseDto } from 'src/medical-history-responses/dto/UpdateMedicalHistoryResponseDto';
import { Repository } from 'typeorm';

@Injectable()
export class MedicalHistoryResponsesService {
  constructor(
    @InjectRepository(MedicalHistoryResponse)
    private readonly medicalHistoryResponseRepository: Repository<MedicalHistoryResponse>,
  ) {}
  async getMedicalHistoryResponses(): Promise<MedicalHistoryResponse[]> {
    return await this.medicalHistoryResponseRepository.find();
  }
  async createMedicalHistoryResponse(
    createMedicalHistoryResponseDto: CreateMedicalHistoryResponseDto,
  ) {
    const newMedicalHistoryResponse =
      await this.medicalHistoryResponseRepository.create(
        createMedicalHistoryResponseDto,
      );
    return {
      status: 200,
      message: 'Thêm câu trả lời thành công!!',
      data: await this.medicalHistoryResponseRepository.save(
        newMedicalHistoryResponse,
      ),
    };
  }
  async deleteMedicalHistoryResponseById(id: number): Promise<void> {
    await this.medicalHistoryResponseRepository.delete(id);
  }
  async updateMedicalHistoryResponse(body: UpdateMedicalHistoryResponseDto) {
    const { id } = body;
    await this.medicalHistoryResponseRepository.update({ id }, body);
    return {
      status: 200,
      message: 'Cập nhật thành công!',
    };
  }
  async deleteMedicalHistoryResponse(id: number) {
    return await this.medicalHistoryResponseRepository.delete(id);
  }
}
