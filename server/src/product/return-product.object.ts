import { Prisma } from "@prisma/client";
import { returnCategoryObject } from "src/category/return-category.object";

export const returnProductObject: Prisma.ProductSelect = ({
  id: true,
  name: true,
  slug: true,
  image: true,
  description: true,
  price: true,
  createdAt: true,
  category: { select: returnCategoryObject }
});