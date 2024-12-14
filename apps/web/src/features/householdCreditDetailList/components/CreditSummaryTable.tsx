import { FC } from "react";

type Props = {
  id: string;
  creditCard: string;
  withdrawalDate: string;
  accountName: string;
  totalAmount: number;
  count: number;
};

export const CreditSummaryTable: FC<Props> = (summary) => {
  return (
    <div className={"text-md flex space-x-5 p-3"}>
      <table>
        <tbody>
          <tr>
            <td>カード</td>
            <td>{summary.creditCard}</td>
          </tr>
          <tr>
            <td>引落日</td>
            <td>{summary.withdrawalDate}</td>
          </tr>
          <tr>
            <td>アカウント</td>
            <td>{summary.accountName}</td>
          </tr>
          <tr>
            <td>件数</td>
            <td>{summary.count}件</td>
          </tr>
          <tr>
            <td>引落金額</td>
            <td>{summary.totalAmount.toLocaleString()}円</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
