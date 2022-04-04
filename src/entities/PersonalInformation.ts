import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Injection } from './Injection';
import { PriorityGroup } from './PriorityGroup';
import { Ward } from './Ward';

@Entity('personal_informations')
export class PersonalInformation {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({ name: 'injection_id', type: 'int' })
  injection_id: number;

  @OneToOne(() => Injection)
  @JoinColumn({ name: 'injection_id' })
  injection: Injection;

  @Column({
    name: 'full_name',
  })
  full_name: string;

  @Column({
    name: 'dob',
  })
  dob: Date;

  @Column({
    name: 'gender',
  })
  gender: number;

  @Column({
    name: 'phone_number',
  })
  phone_number: string;

  @Column({
    name: 'email',
  })
  email: string;

  @Column({
    name: 'citizen_id',
  })
  citizen_id: string;

  @Column({
    name: 'health_insurance_number',
  })
  health_insurance_number: string;

  @Column({
    name: 'occupation',
  })
  occupation: string;

  @Column({
    name: 'workplace',
  })
  workplace: string;

  @Column({
    name: 'address',
  })
  address: string;

  @Column({
    name: 'ward_id',
  })
  ward_id: number;

  @OneToOne(() => Ward)
  @JoinColumn({ name: 'ward_id' })
  ward: Ward;

  @Column({
    name: 'ethnic',
  })
  ethnic: string;

  @Column({
    name: 'nationality',
  })
  nationality: string;

  @Column({
    name: 'priority_group_id',
  })
  priority_group_id: number;
  @OneToOne(() => PriorityGroup)
  @JoinColumn({ name: 'priority_group_id' })
  priorityGroup: PriorityGroup;

  @Column({
    name: 'expected_date',
  })
  expected_date: Date;

  @Column({
    name: 'session_id',
  })
  session_id: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updated_at: Date;
}
