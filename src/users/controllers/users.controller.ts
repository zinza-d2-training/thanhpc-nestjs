import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from 'src/entities/User';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UpdateUserDto } from '../dto/UpdateUser.dto';
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
  @Delete('delete/:id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUserById(id);
  }
  @Put('update')
  async updateUser(@Body() body: UpdateUserDto) {
    return await this.userService.updateUser(body);
  }
}
