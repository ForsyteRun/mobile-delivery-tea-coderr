import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { createProductObject } from './create-product.object';
import { ProductRequestDto } from './dto/product.dto';
import { returnProductObject } from './return-product.object';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly categoryService: CategoryService
  ) { }

  async getAll(searchTerm?: string) {
    if (searchTerm) return this.search(searchTerm);

    return this.prisma.product.findMany({ select: returnProductObject, orderBy: { createdAt: 'desc' } });
  }

  async search(searchTerm: string) {

    return this.prisma.product.findMany({
      where:
      {
        OR: [
          { name: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } }
        ]
      },
      select: returnProductObject
    });

  }

  async bySlug(slug: string) {
    const product = this.prisma.product.findUnique({ where: { slug }, select: returnProductObject });

    if (!product) throw new Error('product not found');

    return product
  }

  async byCategorySlug(categorySlug: string) {
    const products = this.prisma.product.findMany({ where: { category: { slug: categorySlug, } }, select: returnProductObject });

    if (!products) throw new Error('products not found');

    return products
  }

  async create(dto: ProductRequestDto) {
    return this.prisma.product.create({
      data: createProductObject(dto)
    });
  }

  async update(id: string, dto: ProductRequestDto) {

    await this.categoryService.byId(dto.categoryId);

    return this.prisma.product.update({
      where: { id },
      data: createProductObject(dto)
    });
  }

  async delete(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
