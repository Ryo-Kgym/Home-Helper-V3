export type AccountBalance = {
  id: string;
} & Record<"accountName" | "balance", string | number>;
