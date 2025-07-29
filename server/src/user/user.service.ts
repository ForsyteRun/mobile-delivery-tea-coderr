import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { returnUserObject } from './return-user.object';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  getById(id: string) {
    const user = this.prisma.user.findUnique({ where: { id }, select: returnUserObject });

    if (!user) throw new NotFoundException('User not found');

    return user
  }

  async toggleFavorite(productId: string, userId: string) {
    const user = await this.getById(userId);

    if (!user) throw new NotFoundException('User not found');

    const isExist = user.favorites.some(favorite => favorite.id === productId);

    await this.prisma.user.update({
      where: { id: userId },
      data: {
        favorites:
          isExist ? { disconnect: { id: productId } } : { connect: { id: productId } }
      }
    });

    return { message: 'Success' }
  }
}