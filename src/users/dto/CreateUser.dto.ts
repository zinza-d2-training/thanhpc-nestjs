import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  citizenId: string;

  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  gender: number;

  @IsNotEmpty()
  full_name: string;
}
