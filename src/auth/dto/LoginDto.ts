import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  citizen_id: string;

  @IsNotEmpty()
  password: string;
}
