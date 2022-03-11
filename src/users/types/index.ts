import { Exclude } from 'class-transformer';
export interface User {
  id: number;
  password: string;
  dob: Date;
  citizenId: string;
  phone_number: string;
  gender: string;
  address: string;
  full_name: string;
}
export class SerializedUser {
  id: number;
  dob: Date;
  citizenId: string;
  phone_number: string;
  gender: string;
  address: string;
  full_name: string;

  @Exclude()
  password: string;
  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}
