import { IocomeType } from "@domain/model/household/IocomeType";

export type LoadFileProps = {
  date: Date;
  note: string;
  price: number;
  iocomeType: IocomeType;
  genreId: string | null;
  genreName: string | null;
  categoryId: string | null;
  categoryName: string | null;
};