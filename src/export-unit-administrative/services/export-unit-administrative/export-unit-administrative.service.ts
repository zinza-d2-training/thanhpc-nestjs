import { Province as ProvinceEntity } from 'src/entities/Province';
import { District as DisctrictEntity } from 'src/entities/District';
import { Ward as WardEntity } from 'src/entities/Ward';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Command, CommandArguments, _cli } from '@squareboat/nest-console';
import * as XLSX from 'xlsx';
import { Repository } from 'typeorm';
import { ProvinceType } from 'src/export-unit-administrative/types/Province';
import { DistrictType } from 'src/export-unit-administrative/types/District';
import { WardType } from 'src/export-unit-administrative/types/Ward';

@Injectable()
export class ExportUnitAdministrativeService {
  constructor(
    @InjectRepository(ProvinceEntity)
    private readonly ProvinceRepository: Repository<ProvinceEntity>,
    @InjectRepository(DisctrictEntity)
    private readonly DistrictRepository: Repository<DisctrictEntity>,
    @InjectRepository(WardEntity)
    private readonly WardRepository: Repository<WardEntity>,
  ) {}
  // run command: node cli export
  @Command('export', {
    desc: 'Test Command',
    args: {},
  })
  async runCli(args: CommandArguments) {
    const listProvince: ProvinceType[] = [];
    const listDistrict: DistrictType[] = [];
    const listWard: WardType[] = [];
    _cli.info(`Hello ${args.name || 'world'}!`);
    const dataUnitAdministrative = XLSX.readFile(
      'src/utils/unitAdministrative.xls',
    ).Sheets;
    const listRecords = XLSX.utils.sheet_to_json(
      dataUnitAdministrative['Sheet1'],
    );
    for (const record of listRecords) {
      const isExistedProvince = listProvince.some(
        (province) => Number(province.province_id) === Number(record['Mã TP']),
      );
      if (!isExistedProvince) {
        listProvince.push({
          name: record['Tỉnh Thành Phố'],
          province_id: Number(record['Mã TP']),
        });
      }
      const isExistedDistrict = listDistrict.some(
        (district) => Number(district.district_id) === Number(record['Mã QH']),
      );
      if (!isExistedDistrict) {
        listDistrict.push({
          district_id: Number(record['Mã QH']),
          province_id: Number(record['Mã TP']),
          name: record['Quận Huyện'],
        });
      }
      listWard.push({
        ward_id: Number(record['Mã PX']),
        district_id: Number(record['Mã QH']),
        name: record['Phường Xã'],
      });
    }
    // console.log('listProvince', listProvince);
    // console.log('listDistrict', listDistrict);
    // console.log('listWard', listWard);
    // await this.ProvinceRepository.insert(listProvince);
    await this.DistrictRepository.insert(listDistrict);
    await this.WardRepository.insert(listWard);
    return;
  }
}
