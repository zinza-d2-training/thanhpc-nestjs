import { IsNotEmpty } from 'class-validator';

export class CreateVaccinationSiteDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  street_name: string;

  @IsNotEmpty()
  ward_id: number;

  @IsNotEmpty()
  site_manager: string;

  @IsNotEmpty()
  number_of_vaccination_table: number;
}
