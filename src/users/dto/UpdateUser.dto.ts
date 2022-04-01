import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  citizen_id: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  gender: number;

  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  ward_id: number;
}
