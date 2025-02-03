import { convertToYmd } from "@/core/function/date/convertToYmd";
import { YYYYmmDD } from "@/type/date/date";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { getPast12MonthYyyyMMdd } from "../../../function/date/getPast12MonthYyyyMMdd";
import { findCategoryIds } from "../../../persistence/browser/server/findCategoryIds";
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
  const categoryIds = await findCategoryIds();

  const { columns, income, outcome } = await fetchMonthlySummaryRecords(
    fromDate,
    toDate,
    categoryIds,
  );

  return (
    <div>
      <MonthlySummaryForm
        fromDate={fromDate?.parseDate()}
        toDate={toDate?.parseDate()}
        categoryIds={categoryIds}
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
