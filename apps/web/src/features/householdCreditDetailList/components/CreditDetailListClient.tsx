"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

import { Table, TableProps } from "../../../components/atoms/Table";
import { FormatPrice } from "../../../components/molecules/FormatPrice";
import { Button } from "../../../components/ui/button/v5";
import { IsExpenseTag } from "../../../components/ui/tag/v5/IsExpenseTag";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { paths } from "../../../routing/paths";
import { CreditSummaryTable } from "./CreditSummaryTable";

type Props = {
  creditCardSummaryId: string;
  summary: {
    id: string;
    creditCard: string;
    withdrawalDate: string;
    accountName: string;
    totalAmount: number;
    count: number;
  };
  details: {
    id: string;
    date: string;
    genreName: string;
    categoryName: string;
    iocomeType: IocomeType;
    amount: number;
    memo: string;
    isExpense: boolean;
  }[];
};
export const CreditDetailListClient: FC<Props> = ({
  creditCardSummaryId,
  summary,
  details,
}) => {
  const { push } = useRouter();

  const tableProps: TableProps[] =
    details.map((detail) => ({
      keyPrefix: "creditDetail",
      columns: [
        { value: detail.date, align: "center" },
        {
          value: detail.genreName,
        },
        { value: detail.categoryName },
        {
          value: (
            <FormatPrice iocomeType={detail.iocomeType} price={detail.amount} />
          ),
          align: "right",
        },
        {
          value: (
            <div className={"flex items-center"}>
              {detail.isExpense && <IsExpenseTag />}
              <span>{detail.memo}</span>
            </div>
          ),
        },
      ],
      onClick: () =>
        push(
          paths.household.creditDetail.edit({
            creditCardSummaryId,
            creditDetailId: detail.id,
          }),
        ),
    })) ?? [];

  const addHandler = () =>
    push(paths.household.creditDetail.add({ creditCardSummaryId }));

  const backHandler = () => push(paths.household.creditCard);

  return (
    <div className={"space-y-3"}>
      <CreditSummaryTable {...summary} />
      <div className={"flex"}>
        <Button type={"back"} onClick={backHandler} label={"戻る"} />
        <Button type={"add"} onClick={addHandler} label={"追加"} />
      </div>
      <Table
        header={["日付", "ジャンル", "カテゴリ", "金額", "メモ"]}
        tablePropsList={tableProps}
        size={"xs"}
        toBottom
        height={"80vh"}
        defaultBottom={false}
      />
    </div>
  );
};
