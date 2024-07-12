"use client";

import { ReactNode, useEffect, useState } from "react";
import { DataTable } from "mantine-datatable";

const PAGE_SIZE = 30;

type DataTableRowType<H extends string> = { id: string } & Record<
  H,
  string | number
>;

type ColumnProps<H extends string> = {
  accessor: H;
  title?: string;
  width?: number | string;
  textAlign?: "left" | "center" | "right";
  render?: (record: Record<H, string | number>) => ReactNode;
};

type DataTableProps<H extends string> = {
  columns: ColumnProps<H>[];
  records: DataTableRowType<H>[];
  onRowClick?: (record: DataTableRowType<H>) => void;
};

export const MantineDataTable = <H extends string>({
  columns,
  records: defaultRecords,
  onRowClick,
}: DataTableProps<H>) => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(defaultRecords.slice(0, PAGE_SIZE));

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(defaultRecords.slice(from, to));
  }, [defaultRecords, page]);

  return (
    <DataTable
      height={"85vh"}
      withTableBorder
      withColumnBorders
      striped
      records={records}
      columns={columns}
      totalRecords={defaultRecords.length}
      recordsPerPage={PAGE_SIZE}
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
