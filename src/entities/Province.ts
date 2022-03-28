import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { District } from './District';

@Entity('provinces')
export class Province {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({ name: 'adult_population', type: 'int' })
  adult_population: number;

  @Column({ name: 'distribution_plan', type: 'int' })
  distribution_plan: number;

  @Column({ name: 'actual_distribution', type: 'int' })
  actual_distribution: number;

  @Column({ name: 'injected_number', type: 'int' })
  injected_number: number;

  @OneToMany(() => District, (district) => district.province)
  districts: District[];

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
