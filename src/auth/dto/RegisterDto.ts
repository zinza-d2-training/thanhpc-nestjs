import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  citizen_id: string;

  @IsNotEmpty()
  password: string;

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
