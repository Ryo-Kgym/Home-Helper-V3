"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";

import { Table, TableProps } from "../../../components/atoms/Table";
import { FormatPrice } from "../../../components/molecules/FormatPrice";
import { Button } from "../../../components/ui/button/v5";
import { IocomeType } from "../../../domain/model/household/IocomeType";
import { paths } from "../../../routing/paths";

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
        { value: detail.memo },
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
      <div className={"flex space-x-5 p-3 text-2xl"}>
        <div>カード： {summary.creditCard}</div>
        <div>引落日： {summary.withdrawalDate}</div>
        <div>アカウント： {summary.accountName}</div>
        <div>{summary.count}件</div>
        <div>{summary.totalAmount.toLocaleString()}円</div>
      </div>
      <div className={"grid grid-cols-2"}>
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
