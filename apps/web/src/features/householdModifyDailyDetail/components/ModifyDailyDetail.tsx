import { FC, PropsWithChildren, useState } from "react";

import { MemoTextArea } from "../../../components/molecules/CustomTextArea/Memo";
import { Button } from "../../../components/ui/button/v5";
import { DatePicker } from "../../../components/ui/date";
import { AmountInput } from "../../../components/ui/numberInput/amount/AmountInput";
import { IocomeTypeSegment } from "../../../components/ui/segment/IocomeTypeSegment";
import { AccountSelect } from "../../../components/ui/select/AccountSelect";
import { CategorySelect } from "../../../components/ui/select/CategorySelect";
import { GenreSelect } from "../../../components/ui/select/GenreSelect";
import { TagInputWrapper } from "../../../components/ui/tag/TagInputWrapper";
import { DailyDetail } from "../../../domain/model/household/DailyDetail";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { deleteDailyDetail } from "../../../hooks/household/daily_detail/deleteDailyDatail";
import { modifyDailyDetail } from "../../../hooks/household/daily_detail/modifyDailyDetail";

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
