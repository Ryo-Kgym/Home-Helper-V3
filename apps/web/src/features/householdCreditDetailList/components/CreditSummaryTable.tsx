import { FC } from "react";

import { AccountSelect } from "../../../components/ui/select/AccountSelect";
import { DateInput } from "../../../components/ui/v4/dateInput/DateInput";
import { TextInput } from "../../../components/ui/v4/textInput";
import styles from "./CreditSummaryTable.module.scss";

type Props = SummaryFormState & SummaryDisplayState;

type SummaryFormState = {
  creditCard: string;
  withdrawalDate: Date;
  accountId: string;
};

type SummaryDisplayState = {
  id: string;
  creditCard: string;
  totalAmount: number;
  count: number;
};

export const CreditSummaryTable: FC<Props> = (summary) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>カード</td>
          <td>
            <TextInput
              label={""}
              value={summary.creditCard}
              setValue={() => undefined}
            />
          </td>
        </tr>
        <tr>
          <td>引落日</td>
          <td>
            <DateInput
              label={""}
              value={summary.withdrawalDate}
              setValue={() => undefined}
            />
          </td>
        </tr>
        <tr>
          <td>アカウント</td>
          <td>
            <AccountSelect
              accountId={summary.accountId}
              setAccountId={() => undefined}
              noLabel
            />
          </td>
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
  );
};
