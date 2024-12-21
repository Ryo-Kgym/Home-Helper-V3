import { useState } from "react";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { errorPopup, successPopup } from "../../../function/successPopup";
import { registerDailyDetail } from "../../../useServer/household/daily_detail/registerDailyDetail";
import { DailyDetailForm } from "./dailyDetailForm";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";

export const RegisterDailyDetailContainer = ({ date }: { date: Date }) => {
  const [form, setForm] = useState<DailyDetailForm>({
    date,
    genreId: "",
    iocomeType: IocomeType.Income,
    categoryId: "",
    accountId: "",
    amount: 0,
    memo: "",
  });

  const allClear = () => {
    setForm({
      date: new Date(),
      genreId: "",
      iocomeType: IocomeType.Income,
      categoryId: "",
      accountId: "",
      amount: 0,
      memo: "",
    });
  };

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
    try {
      await registerDailyDetail({
        date: form.date,
        iocomeType: form.iocomeType,
        genreId: form.genreId,
        categoryId: form.categoryId,
        accountId: form.accountId,
        amount: form.amount,
        memo: form.memo,
      });
      setForm({ ...form, amount: 0, memo: "" });
      successPopup("登録しました");
    } catch (e) {
      console.error(e);
      errorPopup("登録に失敗しました");
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
      clearClick={allClear}
      registerClick={registerClickHandler}
    />
  );
};
