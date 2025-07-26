import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) { }
  async getAllUsers() {
    return this.prismaService.user.findMany()
  }
}
