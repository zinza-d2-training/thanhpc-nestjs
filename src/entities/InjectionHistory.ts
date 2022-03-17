import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Vaccine } from './Vaccine';

@Entity('injection_histories')
export class InjectionHistory {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({ name: 'injected_vaccine_name_id', type: 'int' })
  injected_vaccine_name_id: number;

  @Column({ name: 'injected_vaccine_day', type: 'timestamp' })
  injected_vaccine_day: Date;

  @Column({ name: 'injected_vaccine_lot_number', type: 'int' })
  injected_vaccine_lot_number: number;

  @Column({ name: 'injected_vaccine_site', type: 'varchar' })
  injected_vaccine_site: number;

  @ManyToOne(() => User, (user) => user.injectionHistories)
  user: User;

  @OneToOne(() => Vaccine)
  @JoinColumn({ name: 'injected_vaccine_name_id' })
  vaccine: Vaccine;

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
