import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizenImage } from 'src/entities/CitizenImage';
import { InjectionHistory } from 'src/entities/InjectionHistory';
import { User } from 'src/entities/User';
import { File as FileEntity } from 'src/entities/File';
import { Vaccine } from 'src/entities/Vaccine';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      FileEntity,
      InjectionHistory,
      Vaccine,
      CitizenImage,
    ]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
  ],
})
export class UserModule {}
