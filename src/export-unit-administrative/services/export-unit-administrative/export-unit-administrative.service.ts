import { Province as ProvinceEntity } from 'src/entities/Province';
import { District as DisctrictEntity } from 'src/entities/District';
import { Ward as WardEntity } from 'src/entities/Ward';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Command, CommandArguments, _cli } from '@squareboat/nest-console';
import * as XLSX from 'xlsx';
import { Repository } from 'typeorm';

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
    desc: 'Export data from excel to mysql server',
    args: {},
  })
  async runCli(args: CommandArguments) {
    const listProvince = [];
    const listDistrict = [];
    const listWard = [];
    _cli.info(`Hello ${args.name || 'world'}!`);
    const dataUnitAdministrative = XLSX.readFile(
      'src/utils/unitAdministrative.xls',
    ).Sheets;
    const listRecords = XLSX.utils.sheet_to_json(
      dataUnitAdministrative['Sheet1'],
    );
    // resolve province
    for (const record of listRecords) {
      const isExistedProvince = listProvince.some(
        (province) => province.name === record['Tỉnh Thành Phố'],
      );
      if (!isExistedProvince) {
        listProvince.push({
          name: record['Tỉnh Thành Phố'],
        });
      }
    }
    await this.ProvinceRepository.insert(listProvince);

    // resolve district
    const listProvinceFromDB = await this.ProvinceRepository.find();
    for (const record of listRecords) {
      for (const province of listProvinceFromDB) {
        if (province.name === record['Tỉnh Thành Phố']) {
          const isExistedDistrict = listDistrict.some(
            (district) => district.name === record['Quận Huyện'],
          );
          if (!isExistedDistrict) {
            listDistrict.push({
              name: record['Quận Huyện'],
              province_id: province.id,
            });
          }
        }
      }
    }
    await this.DistrictRepository.insert(listDistrict);
    // resolve ward
    const listDistrictFromDB = await this.DistrictRepository.find();
    for (const record of listRecords) {
      for (const district of listDistrictFromDB) {
        if (district.name === record['Quận Huyện']) {
          listWard.push({
            name: record['Phường Xã'] || 'Undefined data',
            district_id: district.id,
          });
        }
      }
    }
    await this.WardRepository.insert(listWard);
    return;
  }
}
