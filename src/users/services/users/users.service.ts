import { User as UserEntity } from 'src/typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

import { SerializedUser, User } from 'src/users/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private users: User[] = [
    {
      id: 1,
      password: 'string',
      dob: new Date('05-05-2000'),
      citizenId: 'string',
      phone_number: 'string',
      gender: 'string',
      address: 'string',
      full_name: 'string',
    },
    {
      id: 1,
      password: 'string2',
      dob: new Date('05-07-2000'),
      citizenId: 'string2',
      phone_number: 'string2',
      gender: 'string2',
      address: 'string2',
      full_name: 'string2',
    },
  ];
  getUsers(): User[] {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }
  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    console.log(newUser);
    return this.userRepository.save(newUser);
  }
}
