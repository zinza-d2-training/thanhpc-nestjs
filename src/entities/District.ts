import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Province } from './Province';
import { Ward } from './Ward';

@Entity('districts')
export class District {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'province_id', type: 'int' })
  province_id: number;

  @ManyToOne(() => Province, (province) => province.districts)
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @OneToMany(() => Ward, (ward) => ward.district)
  wards: Ward[];

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
