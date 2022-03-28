import { IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { CitizenIdRule } from './rules/CitizenIdRule';
import { PhoneNumberRule } from './rules/PhoneNumberRule';

export class RegisterDto {
  @IsNotEmpty()
  @Validate(CitizenIdRule)
  @IsString()
  citizen_id: string;

  @IsNotEmpty()
  @MinLength(8)
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  gender: number;

  @Validate(PhoneNumberRule)
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  // @IsUserAlreadyExist()
  @IsNotEmpty()
  ward_id: number;
}
