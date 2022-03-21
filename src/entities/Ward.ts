import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { District } from './District';

@Entity('wards')
export class Ward {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'district_id', type: 'int' })
  district_id: number;

  @ManyToOne(() => District, (district) => district.wards)
  @JoinColumn({ name: 'district_id' })
  district: District;

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
