import { IocomeTypeSegment } from "../../../components/molecules/CustomSegment/IocomeType";
import { ValiditySegment } from "../../../components/molecules/CustomSegment/ValiditySegment";
import { GenreSelect } from "../../../components/molecules/CustomSelect/Genre";
import { GenreNameTextInput } from "../../../components/molecules/CustomTextInput";
import { Button, FieldFrame } from "../../../components/ui";
import { DisplayOrderInput } from "../../../components/ui/numberInput/displayOrder/DisplayOrderInput";
import { IocomeType } from "../../../domain/model/household/IocomeType";

export const CategoryAddPresenter = ({
  inputCategoryName,
  setInputCategoryName,
  inputIocomeType,
  setInputIocomeType,
  inputGenreId,
  setInputGenreId,
  inputIsValid,
  setInputIsValid,
  inputDisplayOrder,
  setInputDisplayOrder,
  registerHandler,
  registerable,
}: {
  inputCategoryName: string;
  setInputCategoryName: (value: string) => void;
  inputIocomeType: IocomeType;
  setInputIocomeType: (value: IocomeType) => void;
  inputGenreId: string | null;
  setInputGenreId: (value: string | null) => void;
  inputIsValid: boolean;
  setInputIsValid: (value: boolean) => void;
  inputDisplayOrder: number | "";
  setInputDisplayOrder: (value: number | "") => void;
  registerHandler: () => void;
  registerable: boolean;
}) => (
  <div className={"w-full p-2"}>
    <FieldFrame title={"カテゴリ名"}>
      <GenreNameTextInput
        genreName={inputCategoryName}
        setGenreName={setInputCategoryName}
      />
    </FieldFrame>
    <FieldFrame title={"収支区分"}>
      <IocomeTypeSegment
        iocomeType={inputIocomeType}
        setIocomeType={setInputIocomeType}
      />
    </FieldFrame>
    <FieldFrame title={"ジャンル"}>
      <GenreSelect
        genreId={inputGenreId}
        setGenreId={setInputGenreId}
        iocomeType={inputIocomeType}
      />
    </FieldFrame>
    <FieldFrame title={"有効・無効"}>
      <ValiditySegment isValid={inputIsValid} setIsValid={setInputIsValid} />
    </FieldFrame>
    <FieldFrame title={"表示順"}>
      <DisplayOrderInput
        value={inputDisplayOrder}
        onChange={setInputDisplayOrder}
      />
    </FieldFrame>

    <Button
      onClick={registerHandler}
      type={"register"}
      disabled={!registerable}
    />
  </div>
);
