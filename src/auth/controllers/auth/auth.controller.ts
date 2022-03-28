import {
  Body,
  Controller,
  Inject,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { RegisterDto } from 'src/auth/dto/RegisterDto';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { editFileName, imageFileFilter } from 'src/utils/uploadMultipleImage';
import { JwtService } from '@nestjs/jwt';
import { GetUser } from 'src/utils/GetUser';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@GetUser() user) {
    const payload = { citizen_id: user.citizen_id, full_name: user.full_name };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken, payload };
  }

  @Post('/register')
  @UseInterceptors(
    FilesInterceptor('files', 2, {
      storage: diskStorage({
        destination: './dist/files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async register(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body: RegisterDto,
  ) {
    return await this.authService.register(files, body);
  }
  @Post('/logout')
  async logout() {
    return await this.authService.logout();
  }
}
