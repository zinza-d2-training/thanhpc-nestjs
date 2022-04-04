import { IsNotEmpty } from 'class-validator';

export class UpdateVaccineRegistrationDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  personal_info_id: number;

  @IsNotEmpty()
  status: string;
}
