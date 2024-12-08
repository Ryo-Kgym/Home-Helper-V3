import { GenreType } from "../../domain/model/household/GenreType";
import { IocomeType } from "../../domain/model/household/IocomeType";

export type CategoryChartData = Record<
  string, // categoryId
  {
    categoryName: string;
    genreName: string;
    iocomeType: IocomeType;
    genreType: GenreType;
    isTransfer: boolean;
    monthlyTotal: Record<
      string, // yyyy-mm
      number
    >;
  }
>;
