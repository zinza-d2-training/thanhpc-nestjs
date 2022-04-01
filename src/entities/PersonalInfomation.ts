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

@Entity('personal_infomations')
export class PersonalInfomation {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({ name: 'injection_id', type: 'int', length: '255' })
  injection_id: string;

  @OneToOne(() => Injection)
  @JoinColumn({ name: 'injection_id' })
  injection: Injection;

  @Column({
    name: 'full_name',
    nullable: true,
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
    nullable: true,
  })
  email: string;

  @Column({
    name: 'citizen_id',
  })
  citizen_id: string;

  @Column({
    name: 'health_insurance_number',
    nullable: true,
  })
  health_insurance_number: string;

  @Column({
    name: 'occupation',
    nullable: true,
  })
  occupation: string;

  @Column({
    name: 'workplace',
    nullable: true,
  })
  workplace: string;

  @Column({
    name: 'address',
    nullable: true,
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
    nullable: true,
  })
  ethnic: string;

  @Column({
    name: 'nationality',
    nullable: true,
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
    nullable: true,
  })
  session_id: number;

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
