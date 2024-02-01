export type Feature =
  | "register"
  | "balance"
  | "yearly"
  | "monthly"
  | "monthlyCategory"
  | "setting";

export type ArgsType = "year" | "month";

export type BoxesType = {
  feature: Feature;
  argsMap: (
    | { type: "year"; value: number }
    | { type: "month"; value: number }
  )[];
}[];
