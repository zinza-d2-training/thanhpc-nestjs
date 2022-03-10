import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/CreateUser.dto';
import { UserService } from 'src/user/services/user/user.service';
import { User } from 'src/user/types';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UserService,
  ) {}
  @Get('')
  getUsers(): User[] {
    return this.usersService.getUsers();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
