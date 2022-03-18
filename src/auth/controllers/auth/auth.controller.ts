import {
  Body,
  Controller,
  Inject,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { RegisterDto } from 'src/auth/dto/RegisterDto';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { editFileName, imageFileFilter } from 'src/utils/uploadMultipleImage';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}
  @Post('/login')
  async login() {
    console.log('login ok');
    return await this.authService.login();
  }
  @Post('/register')
  @UseInterceptors(
    FilesInterceptor('files', 2, {
      storage: diskStorage({
        destination: './files',
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
    console.log('logout ok');
    return await this.authService.logout();
  }
}
