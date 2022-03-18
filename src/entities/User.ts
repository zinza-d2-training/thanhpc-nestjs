import { Exclude } from 'class-transformer';
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
import { CitizenImage } from './CitizenImage';
import { InjectionHistory } from './InjectionHistory';
import { Ward } from './Ward';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({ name: 'citizen_id', type: 'varchar', length: '255' })
  citizen_id: string;

  @Column({ name: 'role', type: 'varchar', length: '255' })
  role: string;

  @Column({ type: 'varchar' })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({
    name: 'full_name',
    nullable: true,
  })
  full_name: string;

  @Column({
    name: 'dob',
    nullable: false,
  })
  dob: Date;

  @Column({
    name: 'gender',
    nullable: false,
  })
  gender: string;

  @Column({
    name: 'phone_number',
    nullable: false,
  })
  phone_number: string;

  @Column({
    name: 'ward_id',
    nullable: false,
  })
  ward_id: number;

  @Column({
    name: 'injection_history_id',
    nullable: true,
  })
  injection_history_id: number;

  @Column({
    name: 'status_injection_registration',
    nullable: true,
  })
  status_injection_registration: string;

  @OneToOne(() => Ward)
  @JoinColumn({ name: 'ward_id' })
  ward: Ward;

  @OneToMany(
    () => InjectionHistory,
    (injectionHistory) => injectionHistory.user,
  )
  injectionHistories: InjectionHistory[];

  @OneToMany(() => CitizenImage, (citizenImages) => citizenImages.user)
  citizenImages: CitizenImage[];

  @CreateDateColumn({
    nullable: true,
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    nullable: true,
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: Date;
}
