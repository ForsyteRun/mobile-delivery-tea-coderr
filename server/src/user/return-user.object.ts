import { Prisma } from "@prisma/client";
import { returnProductObject } from "src/product/return-product.object";

export const returnUserObject: Prisma.UserSelect = ({
  id: true,
  name: true,
  email: true,
  createdAt: true,
  phone: true,
  avatarPath: true,
  favorites: { select: returnProductObject }
});