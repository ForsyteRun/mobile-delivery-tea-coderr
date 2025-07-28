import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
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

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: AuthRequest) {
    return await this.authService.login(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  async refreshTokens(@Body() dto: RefreshTokensRequest) {
    return await this.authService.refreshTokens(dto);
  }
}