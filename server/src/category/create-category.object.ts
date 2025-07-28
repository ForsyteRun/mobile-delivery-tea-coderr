import { generateSlug } from "src/utils/genearte-slug";
import { CategoryRequestDto } from "./dto/category.dto";

export const createCategoryObject = (dto: CategoryRequestDto) => ({
  ...dto,
  slug: generateSlug(dto.name)
});