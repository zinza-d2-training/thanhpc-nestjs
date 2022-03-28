import { IsNotEmpty } from 'class-validator';

export class DistributionUpdateDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  adult_population: number;

  @IsNotEmpty()
  distribution_plan: number;

  @IsNotEmpty()
  actual_distribution: number;

  @IsNotEmpty()
  injected_number: number;
}
