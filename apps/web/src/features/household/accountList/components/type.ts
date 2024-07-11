export type AccountTableRow = {
  id: string;
} & Record<"accountName" | "balance", string | number>;
