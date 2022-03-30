import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Ward } from './Ward';

@Entity('vaccination_sites')
export class VaccinationSite {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'street_name', type: 'varchar' })
  street_name: string;

  @Column({ name: 'ward_id', type: 'int' })
  ward_id: number;

  @Column({ name: 'site_manager', type: 'varchar' })
  site_manager: string;

  @Column({ name: 'number_of_vaccination_table', type: 'int' })
  number_of_vaccination_table: number;

  @OneToOne(() => Ward)
  @JoinColumn({ name: 'ward_id' })
  ward: Ward;

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
