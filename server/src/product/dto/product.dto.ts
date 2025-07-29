import { IsInt, IsString, MinLength } from "class-validator";

export class ProductRequestDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  description: string;

  @IsInt()
  price: number;

  @IsString()
  image: string;

  @IsString()
  categoryId: string;
}