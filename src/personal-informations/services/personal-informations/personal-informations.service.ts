import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalInformation } from 'src/entities/PersonalInformation';
import { CreatePersonalInformationDto } from 'src/personal-informations/dto/CreatePersonalInformationDto';
import { UpdatePersonalInformationDto } from 'src/personal-informations/dto/UpdatePersonalInformationDto';
import { Repository } from 'typeorm';

@Injectable()
export class PersonalInformationsService {
  personalInformationsService: any;
  constructor(
    @InjectRepository(PersonalInformation)
    private readonly personalInformationRepository: Repository<PersonalInformation>,
  ) {}
  async getPersonalInformations(): Promise<PersonalInformation[]> {
    return await this.personalInformationRepository.find({
      relations: [
        'ward',
        'ward.district',
        'ward.district.province',
        'injection',
        'priorityGroup',
      ],
    });
  }
  async createPersonalInformation(
    createPersonalInformationDto: CreatePersonalInformationDto,
  ) {
    const newPersonalInformation =
      await this.personalInformationRepository.create(
        createPersonalInformationDto,
      );
    return {
      status: 200,
      message: 'Thêm Thông tin cá nhân thành công!!',
      data: await this.personalInformationRepository.save(
        newPersonalInformation,
      ),
    };
  }
  async deletePersonalInformationById(id: number): Promise<void> {
    await this.personalInformationRepository.delete(id);
  }
  async updatePersonalInformation(body: UpdatePersonalInformationDto) {
    const { id } = body;
    await this.personalInformationRepository.update({ id }, body);
    return {
      status: 200,
      message: 'Cập nhật thành công!',
    };
  }
  async deletePersonalInformation(id: number) {
    return await this.personalInformationRepository.delete(id);
  }
}
