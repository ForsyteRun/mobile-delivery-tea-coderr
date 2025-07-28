import { IsString, MinLength } from "class-validator";

export class CategoryRequestDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  image: string;
}
