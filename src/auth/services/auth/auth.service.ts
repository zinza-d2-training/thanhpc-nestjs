import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User } from 'src/entities/User';
import { File } from 'src/entities/File';
import { Repository } from 'typeorm';
import { RegisterDto } from 'src/auth/dto/RegisterDto';
import { CitizenImage } from 'src/entities/CitizenImage';
import { hashPassword } from 'src/utils/HashPassword';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    @InjectRepository(CitizenImage)
    private readonly citizenImageRepository: Repository<CitizenImage>,
  ) {}
  async validateUser(citizen_id: string, password: string) {
    const user = await this.userRepository.findOne({ citizen_id });
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }
  async register(files: Array<Express.Multer.File>, body: RegisterDto) {
    const existedUser = await this.userRepository.findOne({
      citizen_id: body.citizen_id,
    });
    if (existedUser) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'CitizenId is already in use',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    const password = hashPassword(body.password);
    const userCreated = this.userRepository.create({
      ...body,
      role: 'default',
      password,
    });
    const userSaved = await this.userRepository.save(userCreated);
    const filesSaved = await this.fileRepository
      .createQueryBuilder()
      .insert()
      .values(
        files.map((file) => ({
          name: file.filename,
          path: file.path,
          mimetype: file.mimetype,
        })),
      )
      .execute();
    this.citizenImageRepository
      .createQueryBuilder()
      .insert()
      .values(
        filesSaved.identifiers.map(({ id }) => ({
          file_id: id,
          user_id: userSaved.id,
        })),
      )
      .execute();
    return;
  }
  async logout() {
    return {
      status: 200,
      message: 'User has been logged out',
    };
  }
}
