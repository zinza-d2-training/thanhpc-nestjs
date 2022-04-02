import { IsNotEmpty, IsOptional } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreatePersonalInformationDto {
  @IsNotEmpty()
  injection_id: number;

  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  gender: number;

  @IsNotEmpty()
  phone_number: string;

  @IsOptional()
  email: string;

  @IsNotEmpty()
  citizen_id: string;

  @IsOptional()
  health_insurance_number: string;

  @IsOptional()
  occupation: string;

  @IsOptional()
  workplace: string;

  @IsOptional()
  address: string;

  @IsNotEmpty()
  ward_id: number;

  @IsOptional()
  ethnic: string;

  @IsOptional()
  nationality: string;

  @IsNotEmpty()
  priority_group_id: number;

  @IsOptional()
  expected_date: Date;

  @IsOptional()
  session_id: number;
}
