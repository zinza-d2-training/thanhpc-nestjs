import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { User } from 'src/users/types';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  @Get('')
  @UseInterceptors(ClassSerializerInterceptor)
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserById(id);
  }
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUserById(id);
  }
}
