import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VaccineRegistration } from 'src/entities/VaccineRegistration';
import { CreateVaccineRegistrationDto } from 'src/vaccine-registrations/dto/CreateVaccineRegistrationDto';
import { UpdateVaccineRegistrationDto } from 'src/vaccine-registrations/dto/UpdateVaccineRegistrationDto';
import { Repository } from 'typeorm';

@Injectable()
export class VaccineRegistrationsService {
  constructor(
    @InjectRepository(VaccineRegistration)
    private readonly vaccineRegistrationRepository: Repository<VaccineRegistration>,
  ) {}
  async getVaccineRegistrations(): Promise<VaccineRegistration[]> {
    return await this.vaccineRegistrationRepository.find({
      relations: [
        'personalInformation',
        'personalInformation.injection',
        'personalInformation.priorityGroup',
        'personalInformation.ward',
        'personalInformation.ward.district',
        'personalInformation.ward.district.province',
      ],
    });
  }
  async createVaccineRegistration(
    createVaccineRegistrationDto: CreateVaccineRegistrationDto,
  ) {
    const newVaccineRegistration =
      await this.vaccineRegistrationRepository.create(
        createVaccineRegistrationDto,
      );
    return {
      status: 200,
      message: 'Thêm đăng ký tiêm thành công!!',
      data: await this.vaccineRegistrationRepository.save(
        newVaccineRegistration,
      ),
    };
  }
  async deleteVaccineRegistrationById(id: number): Promise<void> {
    await this.vaccineRegistrationRepository.delete(id);
  }
  async updateVaccineRegistration(body: UpdateVaccineRegistrationDto) {
    const { id } = body;
    await this.vaccineRegistrationRepository.update({ id }, body);
    return {
      status: 200,
      message: 'Cập nhật thành công!',
    };
  }
  async deleteVaccineRegistration(id: number) {
    return await this.vaccineRegistrationRepository.delete(id);
  }
}
