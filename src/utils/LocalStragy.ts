import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      usernameField: 'citizen_id',
    });
  }
  async validate(citizen_id: string, password: string) {
    const user = await this.authService.validateUser(citizen_id, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
