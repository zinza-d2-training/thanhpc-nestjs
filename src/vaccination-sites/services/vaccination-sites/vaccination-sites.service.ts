import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VaccinationSite } from 'src/entities/VaccinationSite';
import { CreateVaccinationSiteDto } from 'src/vaccination-sites/dto/CreateVaccinationSiteDto';
import { UpdateVaccinationSiteDto } from 'src/vaccination-sites/dto/UpdateVaccinationSiteDto';
import { Repository } from 'typeorm';

@Injectable()
export class VaccinationSitesService {
  constructor(
    @InjectRepository(VaccinationSite)
    private readonly vaccinationSiteRepository: Repository<VaccinationSite>,
  ) {}
  async getVaccinationSites(): Promise<VaccinationSite[]> {
    return await this.vaccinationSiteRepository.find({
      relations: ['ward', 'ward.district', 'ward.district.province'],
    });
  }
  async createVaccinationSite(
    createVaccinationSiteDto: CreateVaccinationSiteDto,
  ) {
    const newVaccinationSite = await this.vaccinationSiteRepository.create(
      createVaccinationSiteDto,
    );
    return {
      status: 200,
      message: 'Thêm điểm tiêm thành công!!',
      data: await this.vaccinationSiteRepository.save(newVaccinationSite),
    };
  }
  async deleteVaccinationSiteById(id: number): Promise<void> {
    await this.vaccinationSiteRepository.delete(id);
  }
  async updateVaccinationSite(body: UpdateVaccinationSiteDto) {
    const { id } = body;
    await this.vaccinationSiteRepository.update({ id }, body);
    return {
      status: 200,
      message: 'Cập nhật thành công!',
    };
  }
  async deleteVaccinationSite(id: number) {
    return await this.vaccinationSiteRepository.delete(id);
  }
}
