import { User } from './User';
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
import { File } from './File';

@Entity('citizen_images')
export class CitizenImage {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'file_id', type: 'varchar' })
  file_id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToOne(() => User, (user) => user.citizenImages)
  user: User;

  @OneToOne(() => File)
  @JoinColumn({ name: 'file_id' })
  file: File;

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
