import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, AuthModule, CategoryModule, UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule { }
