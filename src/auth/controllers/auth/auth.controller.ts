import { Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';

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
  async register() {
    console.log('register ok');
    return await this.authService.register();
  }
  @Post('/logout')
  async logout() {
    console.log('logout ok');
    return await this.authService.logout();
  }
}
