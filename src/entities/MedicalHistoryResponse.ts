import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicalHistoryQuestion } from './MedicalHistoryQuestion';
import { VaccineRegistration } from './VaccineRegistration';

@Entity('medical_history_responses')
export class MedicalHistoryResponse {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({ name: 'vaccine_registration_id', type: 'int' })
  vaccine_registration_id: number;

  @ManyToOne(
    () => VaccineRegistration,
    (vaccineRegistration) => vaccineRegistration.medicalHistoryResponses,
  )
  @JoinColumn({ name: 'vaccine_registration_id' })
  vaccineRegistration: VaccineRegistration;

  @Column({ name: 'question_id', type: 'int' })
  question_id: number;

  @ManyToOne(
    () => MedicalHistoryQuestion,
    (medicalHistoryQuestion) => medicalHistoryQuestion.medicalHistoryResponses,
  )
  @JoinColumn({ name: 'question_id' })
  medicalHistoryQuestion: MedicalHistoryQuestion;

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
