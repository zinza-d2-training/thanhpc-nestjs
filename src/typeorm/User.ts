import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({ type: 'varchar' })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({
    nullable: false,
  })
  dob: Date;

  @Column({
    nullable: false,
  })
  citizenId: string;

  @Column({
    nullable: false,
  })
  phone_number: string;

  @Column({
    nullable: false,
  })
  gender: number;

  @Column({
    default: '',
    nullable: false,
  })
  address: string;

  @Column({
    default: '',
    nullable: true,
  })
  full_name: string;
}
