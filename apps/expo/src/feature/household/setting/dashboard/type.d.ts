export type Feature =
  | "register"
  | "balance"
  | "yearly"
  | "monthly"
  | "monthlyCategory"
  | "setting"
  | "reload";

export type ArgsType = "year" | "month";

export type ArgsMapType =
  | { type: "year"; value: number }
  | { type: "month"; value: number };

export type BoxesType = {
  id: string;
  feature: Feature;
  order: number;
  argsMap: ArgsMapType[];
}[];
