import { IsNotEmpty } from 'class-validator';

export class UpdateMedicalHistoryQuestionDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  prehistoric: string;

  @IsNotEmpty()
  is_symptom: number;
}
