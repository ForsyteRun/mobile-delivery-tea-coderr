import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { User } from '@prisma/client';
import { hash, verify } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRequest } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService) { }

  async register(dto: AuthRequest) {
    const { email, password } = dto

    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (user) {
      throw new NotFoundException('User exist');
    }

    const hashPassword = await hash(password);

    const userCreated = await this.prismaService.user.create(
      {
        data:
        {
          email,
          password: hashPassword,
          avatarPath: faker.image.avatar(),
          name: faker.person.firstName(),
          phone: faker.phone.number()
        }
      });

    const tokens = await this.generateTokens(userCreated.id);

    return {
      user: this.getUserFields(userCreated),
      ...tokens
    }
  }

  private async generateTokens(id: string) {
    const data = { id };

    const accessToken = this.jwtService.sign(data, {
      expiresIn: '1d',
    });

    const refreshToken = this.jwtService.sign(data, {
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken
    }
  }

  private getUserFields(user: User) {
    return {
      id: user.id,
      email: user.email,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    const isPasswordValid = await verify(user.password, password);

    if (!isPasswordValid) {
      throw new NotFoundException('User does not exist');
    }

    return user;
  }
}
