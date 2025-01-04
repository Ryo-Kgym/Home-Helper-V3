"use client";

import { FC, useState } from "react";

import { Button } from "../../../components/ui/button/v5";
import { TagInputWrapper } from "../../../components/ui/tag/TagInputWrapper";
import { DateInput } from "../../../components/ui/v4/dateInput/DateInput";
import { convertToYmd } from "../../../function/date/convertToYmd";
import { useRouter } from "../../../routing/client/useRouter";

type Props = {
  //
};

type SearchFormFormState = {
  fromDate: Date | null;
  toDate: Date | null;
  tags: string[];
};

export const SearchFormClient: FC<Props> = () => {
  const [form, setForm] = useState<SearchFormFormState>({
    fromDate: null,
    toDate: null,
    tags: [],
  });
  const { push } = useRouter();

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
      <TagInputWrapper
        label={"Tags"}
        values={form.tags}
        onChange={(v) => {
          setForm({
            ...form,
            tags: v,
          });
        }}
      />
      <Button
        label={"検索"}
        onClick={() => {
          const fromDateQuery =
            form.fromDate && `fromDate=${convertToYmd(form.fromDate)}`;
          const toDateQuery =
            form.toDate && `toDate=${convertToYmd(form.toDate)}`;
          const tagIdsQuery =
            form.tags.length &&
            `tag=${form.tags.map((tag) => `${tag}`).join(",")}`;

          push(
            `?${[fromDateQuery, toDateQuery, tagIdsQuery].filter((noop) => noop).join("&")}`,
          );
        }}
        type={"save"}
      />
    </div>
  );
};
