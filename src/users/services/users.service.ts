import { User as UserEntity } from 'src/entities/User';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  getUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
  getUserById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }
  async deleteUserById(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
