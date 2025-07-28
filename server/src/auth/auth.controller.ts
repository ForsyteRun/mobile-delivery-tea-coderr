import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators/auth.decorator';
import { AuthRequest } from './dto/auth.dto';
import { RefreshTokensRequest } from './dto/refresh-tokens.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() dto: AuthRequest) {
    return await this.authService.register(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Auth()
  async login(@Body() dto: AuthRequest) {
    return await this.authService.login(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  @Auth()
  async refreshTokens(@Body() dto: RefreshTokensRequest) {
    return await this.authService.refreshTokens(dto);
  }
}