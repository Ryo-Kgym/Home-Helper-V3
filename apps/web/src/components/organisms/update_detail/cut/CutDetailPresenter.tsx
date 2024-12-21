import { IocomeType } from "../../../../domain/model/household/IocomeType";
import { MemoTextArea } from "../../../molecules/CustomTextArea/Memo";
import { Button } from "../../../ui/button/v5";
import { DatePicker } from "../../../ui/date";
import { AmountInput } from "../../../ui/numberInput/amount/AmountInput";
import { AccountSelect } from "../../../ui/select/AccountSelect";
import { CategorySelect } from "../../../ui/select/CategorySelect";
import { GenreSelect } from "../../../ui/select/GenreSelect";

export const CutDetailPresenter = ({
  detailDate,
  defaultDetailDate,
  setDetailDate,
  iocomeType,
  genreId,
  defaultGenreId,
  changeGenreIdHandler,
  categoryId,
  defaultCategoryId,
  changeCategoryIdHandler,
  defaultAccountId,
  amount,
  cutAfterAmount,
  defaultAmount,
  changeAmountHandler,
  defaultMemo,
  newMemo,
  changeNewMemoHandler,
  cutAfterMemo,
  changeCutAfterMemoHandler,
  updateHandler,
  clearHandler,
  updateButtonDisabled,
}: {
  detailDate: Date;
  defaultDetailDate: Date;
  setDetailDate: (_: Date) => void;
  iocomeType: IocomeType;
  genreId: string;
  defaultGenreId: string;
  changeGenreIdHandler: (_: string) => void;
  categoryId: string;
  defaultCategoryId: string;
  changeCategoryIdHandler: (_: string) => void;
  defaultAccountId: string;
  amount: number;
  cutAfterAmount: number;
  defaultAmount: number;
  changeAmountHandler: (_: number) => void;
  defaultMemo: string;
  newMemo: string;
  changeNewMemoHandler: (_: string) => void;
  cutAfterMemo: string;
  changeCutAfterMemoHandler: (_: string) => void;
  updateHandler: () => void;
  clearHandler: () => void;
  updateButtonDisabled: boolean;
}) => (
  <div>
    <div className={"flex items-center justify-items-center"}>
      <div className={"w-full"}>
        <div>分解前</div>
        <DatePicker
          value={defaultDetailDate}
          onChange={() => undefined}
          required
          defaultValue={defaultDetailDate}
          disabled
        />
        <GenreSelect
          genreId={defaultGenreId}
          onChange={() => undefined}
          iocomeType={iocomeType}
          disabled
        />
        <CategorySelect
          genreId={defaultGenreId}
          categoryId={defaultCategoryId}
          onChange={() => undefined}
          disabled
        />
        <AccountSelect
          accountId={defaultAccountId}
          onChange={() => undefined}
          disabled
        />
        <AmountInput
          value={defaultAmount}
          onChange={() => undefined}
          disabled
        />
        <MemoTextArea memo={defaultMemo} setMemo={() => undefined} disabled />
      </div>
      <div className={"w-32 items-center justify-items-center text-center"}>
        <div>{"->"}</div>
      </div>
      <div className={"w-full"}>
        <div>分解後</div>
        <DatePicker
          value={defaultDetailDate}
          onChange={() => undefined}
          required
          defaultValue={defaultDetailDate}
          disabled
        />
        <GenreSelect
          genreId={defaultGenreId}
          onChange={() => undefined}
          iocomeType={iocomeType}
          disabled
        />
        <CategorySelect
          genreId={defaultGenreId}
          categoryId={defaultCategoryId}
          onChange={() => undefined}
          disabled
        />
        <AccountSelect
          accountId={defaultAccountId}
          onChange={() => undefined}
          disabled
        />
        <AmountInput
          value={cutAfterAmount}
          onChange={() => undefined}
          disabled
        />
        <MemoTextArea memo={cutAfterMemo} setMemo={changeCutAfterMemoHandler} />
      </div>
      <div className={"w-32 items-center justify-items-center text-center"}>
        <div>{"+"}</div>
      </div>
      <div className={"w-full"}>
        <div>新規</div>
        <DatePicker
          value={detailDate}
          onChange={setDetailDate}
          required
          defaultValue={detailDate}
        />
        <GenreSelect
          genreId={genreId}
          onChange={changeGenreIdHandler}
          iocomeType={iocomeType}
        />
        <CategorySelect
          genreId={genreId}
          categoryId={categoryId}
          onChange={changeCategoryIdHandler}
        />
        <AccountSelect
          accountId={defaultAccountId}
          onChange={() => undefined}
          disabled
        />
        <AmountInput value={amount} onChange={changeAmountHandler} />
        <MemoTextArea memo={newMemo} setMemo={changeNewMemoHandler} />
      </div>
    </div>
    <div className={"grid grid-cols-2 justify-items-center"}>
      <Button
        type={"modify"}
        label={"更新"}
        onClick={updateHandler}
        disabled={updateButtonDisabled}
      />
      <Button type={"back"} label={"クリア"} onClick={clearHandler} />
    </div>
  </div>
);
