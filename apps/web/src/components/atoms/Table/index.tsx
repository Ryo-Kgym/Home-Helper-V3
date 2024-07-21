export { TableContainer as Table } from "./TableContainer";

export type TableProps = {
  keyPrefix: string;
  columns: ColumnProps[];
  onClick?: () => void;
};

export type ColumnProps = {
  value: React.ReactNode | string | number;
  align?: "left" | "right" | "center";
  hidden?: boolean;
};
