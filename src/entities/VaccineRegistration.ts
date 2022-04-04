import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MedicalHistoryResponse } from './MedicalHistoryResponse';
import { PersonalInformation } from './PersonalInformation';

@Entity('vaccine_registrations')
export class VaccineRegistration {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({
    name: 'personal_info_id',
  })
  personal_info_id: number;

  @OneToOne(() => PersonalInformation)
  @JoinColumn({ name: 'personal_info_id' })
<<<<<<< HEAD
  personalInformation: PersonalInformation;
=======
  personalInfomation: PersonalInformation;
>>>>>>> 5915eb66ed8f09c524599441d04fa95a52dee828

  @Column({ name: 'status', type: 'varchar' })
  status: string;

  @OneToMany(
    () => MedicalHistoryResponse,
    (medicalHistoryResponse) => medicalHistoryResponse.vaccineRegistration,
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
<<<<<<< HEAD
=======
  medicalHistoryResponse: any;
>>>>>>> 5915eb66ed8f09c524599441d04fa95a52dee828
}
