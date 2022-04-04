import { IsNotEmpty } from 'class-validator';

export class CreateVaccineRegistrationDto {
  @IsNotEmpty()
  personal_info_id: number;

  @IsNotEmpty()
  status: string;
}
