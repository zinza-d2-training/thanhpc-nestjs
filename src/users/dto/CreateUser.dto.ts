import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  citizen_id: string;
  @IsNotEmpty()
  role: string;
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  citizen_image_id: number;

  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  ward_id: number;

  @IsNotEmpty()
  injection_history_id: number;

  @IsNotEmpty()
  status_injection_registration: string;
}
