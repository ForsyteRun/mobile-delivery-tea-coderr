import { generateSlug } from "src/utils/genearte-slug";
import { ProductRequestDto } from "./dto/product.dto";

export const createProductObject = (dto: ProductRequestDto) => {
  const { name, description, image, price, categoryId } = dto;

  return {
    name,
    description,
    image,
    price,
    category: { connect: { id: categoryId } },
    slug: generateSlug(name)
  }
};