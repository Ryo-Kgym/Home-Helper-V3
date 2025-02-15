"use client";

import { DataTable } from "mantine-datatable";
import { ReactNode, useEffect, useState } from "react";

type DataTableRowType<R extends object> = { id: string } & R;

type ColumnProps<R extends object> = {
  accessor: keyof R;
  title?: string;
  width?: number | string;
  textAlign?: "left" | "center" | "right";
  render?: (record: R) => ReactNode;
  hidden?: boolean;
  footer?: ReactNode;
};

type DataTableProps<R extends object> = {
  columns: ColumnProps<R>[];
  records: DataTableRowType<R>[];
  onRowClick?: (record: DataTableRowType<R>) => void;
  height?: string;
  recordsPerPage?: number;
};

export const MantineDataTable = <R extends object>({
  columns,
  records: defaultRecords,
  onRowClick,
  height = "85vh",
  recordsPerPage = 30,
}: DataTableProps<R>) => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(
    defaultRecords?.slice(0, recordsPerPage),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const from = (page - 1) * recordsPerPage;
    const to = from + recordsPerPage;
    setRecords(defaultRecords?.slice(from, to));
  }, [defaultRecords, page]);

  return (
    <DataTable
      height={height}
      withTableBorder
      withColumnBorders
      striped
      records={records}
      columns={columns}
      totalRecords={defaultRecords?.length ?? 0}
      recordsPerPage={recordsPerPage}
      page={page}
      onPageChange={(p) => setPage(p)}
      paginationSize="md"
      loadingText="Loading..."
      noRecordsText="No records found"
      paginationText={({ from, to, totalRecords }) =>
        `Records ${from} - ${to} of ${totalRecords}`
      }
      paginationActiveBackgroundColor="green"
      paginationActiveTextColor="#e6e348"
      onRowClick={(record) => onRowClick?.(record.record)}
    />
  );
};
