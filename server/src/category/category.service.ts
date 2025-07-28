import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createCategoryObject } from './create-category.object';
import { CategoryRequestDto } from './dto/category.dto';
import { returnCategoryObject } from './return-category.object';


@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) { }

  async getAll() {
    return this.prisma.category.findMany({ select: returnCategoryObject });
  }

  async byId(id: string) {
    const category = this.prisma.category.findUnique({ where: { id }, select: returnCategoryObject });

    if (!category) throw new Error('Category not found');

    return category
  }

  async bySlug(slug: string) {
    const category = this.prisma.category.findUnique({ where: { slug }, select: returnCategoryObject });

    if (!category) throw new Error('Category not found');

    return category
  }

  async create(dto: CategoryRequestDto) {
    return this.prisma.category.create({
      data: createCategoryObject(dto)
    });
  }

  async update(id: string, dto: CategoryRequestDto) {
    return this.prisma.category.update({
      where: { id },
      data: createCategoryObject(dto)
    });
  }

  async delete(id: string) {
    return this.prisma.category.delete({ where: { id } });
  }
}
