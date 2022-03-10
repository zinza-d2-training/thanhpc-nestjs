import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    default: '',
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
  })
  dob: Date;

  @Column({
    default: '',
    nullable: false,
  })
  citizenId: string;

  @Column({
    default: '',
    nullable: false,
  })
  phone_number: string;

  @Column({
    default: '',
    nullable: false,
  })
  gender: string;

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
