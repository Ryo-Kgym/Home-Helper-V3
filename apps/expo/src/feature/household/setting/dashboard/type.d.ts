export type Feature =
  | "register"
  | "balance"
  | "yearly"
  | "monthly"
  | "monthlyCategory"
  | "setting";

export type ArgsType = "year" | "month";

export type ArgsMapType =
  | { type: "year"; value: number }
  | { type: "month"; value: number };

export type BoxesType = {
  id: string;
  feature: Feature;
  argsMap: ArgsMapType[];
}[];
