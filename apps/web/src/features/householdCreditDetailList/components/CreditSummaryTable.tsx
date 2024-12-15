import { FC } from "react";

import { AccountSelect } from "../../../components/ui/select/AccountSelect";
import { DateInput } from "../../../components/ui/v4/dateInput/DateInput";
import { TextInput } from "../../../components/ui/v4/textInput";
import { SummaryDisplayState, SummaryFormState } from "../types/summaryProps";
import styles from "./CreditSummaryTable.module.scss";
import { useStateCreditSummary } from "./useStateCreditSummary";

type Props = SummaryFormState & SummaryDisplayState;

export const CreditSummaryTable: FC<Props> = (summary) => {
  const { form, setForm } = useStateCreditSummary({ init: summary });

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>カード</td>
          <td>
            <TextInput
              label={""}
              value={form.creditCard}
              setValue={(v) => setForm({ ...form, creditCard: v })}
            />
          </td>
        </tr>
        <tr>
          <td>引落日</td>
          <td>
            <DateInput
              label={""}
              value={form.withdrawalDate}
              setValue={(v) => {
                if (!v) return;
                setForm({ ...form, withdrawalDate: v });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>アカウント</td>
          <td>
            <AccountSelect
              accountId={form.accountId}
              setAccountId={(v) => {
                if (!v) return;
                setForm({ ...form, accountId: v });
              }}
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
