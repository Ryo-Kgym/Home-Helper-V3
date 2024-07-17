"use client";

import { ReactNode, useEffect, useState } from "react";
import { DataTable } from "mantine-datatable";

type DataTableRowType<H extends string> = { id: string } & Record<
  H,
  string | number | boolean
>;

type ColumnProps<H extends string> = {
  accessor: H;
  title?: string;
  width?: number | string;
  textAlign?: "left" | "center" | "right";
  render?: (record: Record<H, string | number | boolean>) => ReactNode;
  hidden?: boolean;
};

type DataTableProps<H extends string> = {
  columns: ColumnProps<H>[];
  records: DataTableRowType<H>[];
  onRowClick?: (record: DataTableRowType<H>) => void;
  height?: string;
  recordsPerPage?: number;
};

export const MantineDataTable = <H extends string>({
  columns,
  records: defaultRecords,
  onRowClick,
  height = "85vh",
  recordsPerPage = 30,
}: DataTableProps<H>) => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(
    defaultRecords?.slice(0, recordsPerPage),
  );

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
