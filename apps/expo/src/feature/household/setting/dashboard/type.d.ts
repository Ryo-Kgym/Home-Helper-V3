export type Feature =
  | "register"
  | "balance"
  | "yearly"
  | "monthly"
  | "monthlyCategory"
  | "setting"
  | "reload";

export type ArgsType = "year" | "month" | "genreType";

export type ArgsMapType =
  | { type: "year"; value: number }
  | { type: "month"; value: number }
  | { type: "genreType"; value: GenreParamType };

export type SettingProps = {
  id: string;
  feature: Feature;
  order: number;
  argsMap: ArgsMapType[];
};

export type GenreParamType = "FLC" | "FXD" | "ALL";
