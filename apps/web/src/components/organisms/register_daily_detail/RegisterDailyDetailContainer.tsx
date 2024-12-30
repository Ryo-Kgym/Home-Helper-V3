import { useState } from "react";

import { errorPopup, successPopup } from "../../../function/successPopup";
import { useNavigation } from "../../../routing/client/useNavigation";
import { registerDailyDetail } from "../../../useServer/household/daily_detail/registerDailyDetail";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";
import { useStateDailyForm } from "./useStateDailyForm";

export const RegisterDailyDetailContainer = ({ date }: { date: Date }) => {
  const { form, setForm, resetForm } = useStateDailyForm({
    date,
  });

  const { refresh } = useNavigation();

  const [isPosting, setIsPosting] = useState(false);

  const anyFieldIsInvalid = () => {
    const genreIdIsInvalid = !form.genreId;
    const categoryIdIsInvalid = !form.categoryId;
    const accountIdIsInvalid = !form.accountId;
    const amountIsInvalid = !form.amount;

    return (
      genreIdIsInvalid ||
      categoryIdIsInvalid ||
      accountIdIsInvalid ||
      amountIsInvalid
    );
  };

  const registerClickHandler = async () => {
    if (anyFieldIsInvalid()) {
      errorPopup("入力に不備があります");
      return;
    }
    setIsPosting(true);
    try {
      await registerDailyDetail({
        ...form,
      });
      setForm({ ...form, amount: 0, memo: "" });
      successPopup("登録しました");
      refresh();
    } catch (e) {
      console.error(e);
      errorPopup("登録に失敗しました");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <RegisterDailyDetailPresenter
      form={form}
      setDate={(v) => setForm({ ...form, date: v })}
      setIocomeType={(v) =>
        setForm({
          ...form,
          iocomeType: v,
          genreId: "",
          categoryId: "",
        })
      }
      setGenreId={(value) =>
        setForm({ ...form, genreId: value ?? "", categoryId: "" })
      }
      setCategoryId={(v) => setForm({ ...form, categoryId: v ?? "" })}
      setAccountId={(v) => setForm({ ...form, accountId: v ?? "" })}
      setAmount={(v) => setForm({ ...form, amount: v })}
      setMemo={(v) => setForm({ ...form, memo: v })}
      clearClick={resetForm}
      registerClick={registerClickHandler}
      disabled={isPosting}
    />
  );
};
