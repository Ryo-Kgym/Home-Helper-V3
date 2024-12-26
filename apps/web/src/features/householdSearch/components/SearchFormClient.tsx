"use client";

import { FC, useState } from "react";

import { Button } from "../../../components/ui/button/v5";
import { DateInput } from "../../../components/ui/v4/dateInput/DateInput";
import { useNavigation } from "../../../routing/client/useNavigation";

type Props = {
  //
};

type SearchFormFormState = {
  fromDate: Date | null;
  toDate: Date | null;
};

export const SearchFormClient: FC<Props> = () => {
  const [form, setForm] = useState<SearchFormFormState>({
    fromDate: null,
    toDate: null,
  });
  const { push } = useNavigation();

  return (
    <div>
      <DateInput
        label={"From"}
        value={form.fromDate}
        setValue={(v) =>
          setForm({
            ...form,
            fromDate: v,
          })
        }
      />
      <DateInput
        label={"To"}
        value={form.toDate}
        setValue={(v) =>
          setForm({
            ...form,
            toDate: v,
          })
        }
      />
      <Button
        label={"検索"}
        onClick={() => {
          const fromDateQuery = form.fromDate
            ? `fromDate=${form.fromDate.toISOString().slice(0, 10)}`
            : "";
          const toDateQuery = form.toDate
            ? `toDate=${form.toDate.toISOString().slice(0, 10)}`
            : "";

          push(`?${fromDateQuery}&${toDateQuery}`);
        }}
        type={"save"}
      />
    </div>
  );
};
