import { IocomeType } from "@domain/model/household/IocomeType";

export type Category = {
  iocomeType: IocomeType;
  genreId: string;
  genreName: string;
  categoryId: string;
  categoryName: string;
};

export type PriceByCategory = {
  category: Category;
  price: number;
};
