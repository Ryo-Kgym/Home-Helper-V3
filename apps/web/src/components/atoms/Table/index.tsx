export { TableContainer as Table } from "./TableContainer";

export type TableProps = {
  keyPrefix: string;
  columns: ColumnProps[];
  onClick?: () => void;
};

export type ColumnProps = {
  value: any;
  align?: "left" | "right" | "center";
  hidden?: boolean;
};

export const tablePropsDateSorter = (
  a: TableProps,
  b: TableProps,
  dateColumnIndex: number = 0
) => {
  const first = a.columns[dateColumnIndex].value;
  const second = b.columns[dateColumnIndex].value;
  if (first < second) {
    return -1;
  }
  if (first > second) {
    return 1;
  }
  return 0;
};
