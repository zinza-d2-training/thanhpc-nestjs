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

  @Column({ name: 'file_id', type: 'int' })
  file_id: number;

  @Column({ name: 'user_id', type: 'int' })
  user_id: number;

  @ManyToOne(() => User, (user) => user.citizenImages)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => File)
  @JoinColumn({ name: 'file_id' })
  file: File;

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
