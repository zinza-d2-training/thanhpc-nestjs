import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  login() {
    console.log(this.userRepository.find());
    return 0;
  }
  register() {
    console.log('register');
    return 0;
  }
  logout() {
    console.log('logout');
    return 0;
  }
}
