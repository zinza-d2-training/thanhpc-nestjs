import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicalHistoryResponse } from './MedicalHistoryResponse';

@Entity('medical_history_questions')
export class MedicalHistoryQuestion {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({ name: 'prehistoric', type: 'varchar' })
  prehistoric: string;

  @Column({ name: 'is_symptom', type: 'int' })
  is_symptom: number;

  @OneToMany(
    () => MedicalHistoryResponse,
    (medicalHistoryResponse) => medicalHistoryResponse.medicalHistoryQuestion,
  )
  medicalHistoryResponses: MedicalHistoryResponse[];

  @CreateDateColumn({
    nullable: true,
    name: 'created_at',
    type: 'timestamp',
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: true,
    name: 'updated_at',
    type: 'timestamp',
  })
  updated_at: Date;
}
