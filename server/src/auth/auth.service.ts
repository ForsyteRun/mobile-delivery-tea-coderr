import { Injectable, NotFoundException } from '@nestjs/common';
import { hash } from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRequest } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) { }

  async register(dto: AuthRequest) {
    const { email, password } = dto

    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (user) {
      throw new NotFoundException('User exist');
    }

    const hashPassword = await hash(password);

    return await this.prismaService.user.create({ data: { email, password: hashPassword, } });
  }

}
