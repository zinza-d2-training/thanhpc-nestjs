import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { File as FileEntity } from 'src/entities/File';
import { CitizenImage } from 'src/entities/CitizenImage';
import { InjectionHistory } from 'src/entities/InjectionHistory';
import { Vaccine } from 'src/entities/Vaccine';
import { User } from 'src/entities/User';
import { LocalStrategy } from 'src/utils/LocalStragy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      FileEntity,
      InjectionHistory,
      Vaccine,
      CitizenImage,
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'jwtsecretkey',
      signOptions: {
        expiresIn: '1 hour',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    LocalStrategy,
  ],
})
export class AuthModule {}
