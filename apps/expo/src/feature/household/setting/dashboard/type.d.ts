export type Feature =
  | "register"
  | "balance"
  | "yearly"
  | "monthly"
  | "monthlyCategory"
  | "setting"
  | "reload";

export type ArgsType = "year" | "month" | "genreType" | "iocomeType";

export type GenreParamType = "FLC" | "FXD" | "ALL";

export type IocomeParamType = "I" | "O";

export type ArgsMapType =
  | { type: "year"; value: number }
  | { type: "month"; value: number }
  | { type: "genreType"; value: GenreParamType }
  | { type: "iocomeType"; value: IocomeParamType };

export type SettingProps = {
  id: string;
  feature: Feature;
  order: number;
  argsMap: ArgsMapType[];
};
