import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ProductRequestDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  getAllProducts(@Query('searchTerm') searchTerm?: string) {
    return this.productService.getAll(searchTerm);
  }

  @Get('by-slug/:slug')
  getProductBySlug(@Param('slug') slug: string) {
    return this.productService.bySlug(slug);
  }

  @Get('by-category/:categorySlug')
  getProductByCategory(@Param('categorySlug') categorySlug: string) {
    return this.productService.byCategorySlug(categorySlug);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @Auth()
  createProduct(@Body() dto: ProductRequestDto) {
    return this.productService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Auth()
  updateProduct(@Param('id') id: string, @Body() dto: ProductRequestDto) {
    return this.productService.update(id, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  @Auth()
  deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
