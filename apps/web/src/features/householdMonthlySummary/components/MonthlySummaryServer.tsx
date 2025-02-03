import { convertToYmd } from "@/core/function/date/convertToYmd";
import { YYYYmmDD } from "@/type/date/date";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { getPast12MonthYyyyMMdd } from "../../../function/date/getPast12MonthYyyyMMdd";
import { fetchMonthlySummaryRecords } from "../server/fetchMonthlySummaryRecords";
import { MonthlySummaryForm } from "./MonthlySummaryForm";
import { MonthlySummaryTable } from "./MonthlySummaryTable";

export const MonthlySummaryServer = async ({
  fromDate = getPast12MonthYyyyMMdd(),
  toDate = new YYYYmmDD(convertToYmd(new Date())),
}: {
  fromDate: YYYYmmDD | undefined;
  toDate: YYYYmmDD | undefined;
}) => {
  const { columns, income, outcome } = await fetchMonthlySummaryRecords(
    fromDate,
    toDate,
  );

  return (
    <div>
      <MonthlySummaryForm
        fromDate={fromDate?.parseDate()}
        toDate={toDate?.parseDate()}
      />
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
