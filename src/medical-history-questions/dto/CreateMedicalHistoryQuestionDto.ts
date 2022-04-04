import { IsNotEmpty } from 'class-validator';

export class CreateMedicalHistoryQuestionDto {
  @IsNotEmpty()
  prehistoric: string;

  @IsNotEmpty()
  is_symptom: number;
}
