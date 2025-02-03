import { YYYY_MM_DD } from "@/type/date/date";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { fetchMonthlySummaryRecords } from "../server/fetchMonthlySummaryRecords";
import { MonthlySummaryForm } from "./MonthlySummaryForm";
import { MonthlySummaryTable } from "./MonthlySummaryTable";

export const MonthlySummaryServer = async ({
  fromDate,
  toDate,
}: {
  fromDate: YYYY_MM_DD;
  toDate: YYYY_MM_DD;
}) => {
  const { columns, income, outcome } = await fetchMonthlySummaryRecords(
    fromDate,
    toDate,
  );

  return (
    <div>
      <MonthlySummaryForm />
      <MonthlySummaryTable
        iocomeType={IocomeType.Income}
        columns={columns}
        records={income.records}
      />
      <MonthlySummaryTable
        iocomeType={IocomeType.Outcome}
        columns={columns}
        records={outcome.records}
      />
    </div>
  );
};
