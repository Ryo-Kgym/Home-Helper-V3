import { FC, PropsWithChildren, useState } from "react";

import { DailyDetail } from "../../../../domain/model/household/DailyDetail";
import { errorPopup, successPopup } from "../../../../function/successPopup";
import { deleteDailyDetail } from "../../../../hooks/household/daily_detail/deleteDailyDatail";
import { modifyDailyDetail } from "../../../../hooks/household/daily_detail/modifyDailyDetail";
import { MemoTextArea } from "../../../molecules/CustomTextArea/Memo";
import { Button } from "../../../ui/button/v5";
import { DatePicker } from "../../../ui/date";
import { AmountInput } from "../../../ui/numberInput/amount/AmountInput";
import { IocomeTypeSegment } from "../../../ui/segment/IocomeTypeSegment";
import { AccountSelect } from "../../../ui/select/AccountSelect";
import { CategorySelect } from "../../../ui/select/CategorySelect";
import { GenreSelect } from "../../../ui/select/GenreSelect";
import { TagInputWrapper } from "../../../ui/tag/TagInputWrapper";

export const ModifyDailyDetail = ({
  initData,
  onClose,
}: {
  initData: DailyDetail;
  onClose: () => void;
}) => {
  const [form, setForm] = useState<DailyDetail>(initData);

  const updateClick = async () => {
    if (!form) return;

    try {
      await modifyDailyDetail({
        ...form,
      });
      successPopup("更新しました");
    } catch (e) {
      errorPopup("更新に失敗しました");
    }
  };

  return (
    <div className={"grid w-full grid-cols-1"}>
      <Field>
        <DatePicker
          value={form.date}
          onChange={(value) => setForm({ ...form, date: value })}
          required
          defaultValue={form.date}
        />
      </Field>
      <Field>
        <IocomeTypeSegment
          iocomeType={form.iocomeType}
          onChange={(value) =>
            setForm({
              ...form,
              iocomeType: value,
              genreId: initData.genreId,
              categoryId: initData.categoryId,
            })
          }
        />
      </Field>
      <Field>
        <GenreSelect
          iocomeType={form.iocomeType}
          genreId={form.genreId}
          onChange={(value) =>
            setForm({
              ...form,
              genreId: value,
              categoryId: initData.categoryId,
            })
          }
        />
      </Field>
      <Field>
        <CategorySelect
          genreId={form.genreId}
          categoryId={form.categoryId}
          onChange={(value) => setForm({ ...form, categoryId: value })}
        />
      </Field>
      <Field>
        <AccountSelect
          accountId={form.accountId}
          onChange={(value) => setForm({ ...form, accountId: value })}
        />
      </Field>
      <Field>
        <AmountInput
          value={form.amount}
          onChange={(value) => setForm({ ...form, amount: value })}
        />
      </Field>
      <Field>
        <MemoTextArea
          memo={form.memo}
          setMemo={(value) => setForm({ ...form, memo: value })}
        />
      </Field>
      <Field>
        <TagInputWrapper values={["tag1", "tag2"]} />
      </Field>
      <div className={"flex justify-items-center"}>
        <Button
          type={"modify"}
          label={"更新"}
          onClick={async () => {
            await updateClick();
            onClose();
          }}
        />
        <Button
          type={"reset"}
          label={"リセット"}
          onClick={() => setForm(initData)}
        />
        <Button
          type={"dangerous"}
          label={"削除"}
          onClick={async () => {
            await deleteDailyDetail({ id: initData.id });
            onClose();
          }}
        />
      </div>
    </div>
  );
};

const Field: FC<PropsWithChildren> = ({ children }) => (
  <div className={"py-2 max-sm:py-1"}>{children}</div>
);
