import { IsNotEmpty } from 'class-validator';

export class CreateMedicalHistoryResponseDto {
  @IsNotEmpty()
  question_id: number;

  @IsNotEmpty()
  vaccine_registration_id: number;

  @IsNotEmpty()
  symptom: string;

  @IsNotEmpty()
  is_symptom: number;
}
