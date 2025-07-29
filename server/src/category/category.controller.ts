import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CategoryService } from './category.service';
import { CategoryRequestDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  getAllCategories() {
    return this.categoryService.getAll();
  }

  @Get('by-id/:id')
  getCategoryById(@Param('id') id: string) {
    return this.categoryService.byId(id);
  }

  @Get('by-slug/:slug')
  getCategoryBySlug(@Param('slug') slug: string) {
    return this.categoryService.bySlug(slug);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @Auth()
  createCategory(@Body() dto: CategoryRequestDto) {
    return this.categoryService.create(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Auth()
  updateCategory(@Param('id') id: string, @Body() dto: CategoryRequestDto) {
    return this.categoryService.update(id, dto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  @Auth()
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
