import { FC, PropsWithChildren } from "react";

import { MemoTextArea } from "../../../components/molecules/CustomTextArea/Memo";
import { Button } from "../../../components/ui/button/v5";
import { DatePicker } from "../../../components/ui/date";
import { AmountInput } from "../../../components/ui/numberInput/amount/AmountInput";
import { IocomeTypeSegment } from "../../../components/ui/segment/IocomeTypeSegment";
import { AccountSelect } from "../../../components/ui/select/AccountSelect";
import { CategorySelect } from "../../../components/ui/select/CategorySelect";
import { GenreSelect } from "../../../components/ui/select/GenreSelect";
import { TagInputWrapper } from "../../../components/ui/tag/TagInputWrapper";
import { Loading } from "../../../components/ui/v5/loading/Loading";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { deleteDailyDetail } from "../../../hooks/household/daily_detail/deleteDailyDatail";
import { useNavigation } from "../../../routing/client/useNavigation";
import { useStateDailyDetail } from "../hooks/useStateDailyDetail";
import { modifyDailyDetail } from "../useServer/modifyDailyDetail";

export const ModifyDailyDetail = ({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) => {
  const { loading, form, setForm, initState, resetForm } = useStateDailyDetail({
    id,
  });
  const { refresh } = useNavigation();

  const updateClick = async () => {
    if (!form) return;

    try {
      await modifyDailyDetail({
        ...form,
      });
      successPopup("更新しました");
      refresh();
    } catch (e) {
      errorPopup("更新に失敗しました");
    }
  };

  if (loading) return <Loading />;

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
              genreId: initState.genreId,
              categoryId: initState.categoryId,
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
              categoryId: initState.categoryId,
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
        <TagInputWrapper
          values={form.tags}
          onChange={(values) => setForm({ ...form, tags: values })}
        />
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
        <Button type={"reset"} label={"リセット"} onClick={resetForm} />
        <Button
          type={"dangerous"}
          label={"削除"}
          onClick={async () => {
            await deleteDailyDetail({ id });
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
