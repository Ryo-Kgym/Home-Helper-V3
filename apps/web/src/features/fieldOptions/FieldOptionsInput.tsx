import React, { ComponentProps, ReactNode } from "react";
import { AppFieldOptions } from "@feature/app/create/appFieldValue";
import { FieldOptionsDateInputFactory } from "@features/fieldOptions/FieldOptionsDateInputFactory";
import { FieldOptionsLookUpInputFactory } from "@features/fieldOptions/FieldOptionsLookUpInputFactory";
import { FieldOptionsSelectBoxInputFactory } from "@features/fieldOptions/FieldOptionsSelectBoxInputFactory";
import { FieldKind } from "@oneforall/domain/field/type";

export type OptionsState = {
  value: AppFieldOptions;
  setValue: (options: AppFieldOptions) => void;
};

export const FieldOptionsInput = (
  props: {
    fieldKind: FieldKind;
  } & OptionsState,
) => (
  <div className={"space-y-5"}>
    <FieldOptionsSWitcher {...props} />
  </div>
);

const FieldOptionsSWitcher = (
  props: ComponentProps<typeof FieldOptionsInput>,
) => {
  const Factory = factoryMap[props.fieldKind];
  return <Factory {...props} />;
};

const NoOptions = () => <div>オプションはありません</div>;

const factoryMap: Record<FieldKind, (props: OptionsState) => ReactNode> = {
  text: NoOptions,
  multipleText: NoOptions,
  numeric: NoOptions,
  selectBox: FieldOptionsSelectBoxInputFactory,
  lookup: FieldOptionsLookUpInputFactory,
  date: FieldOptionsDateInputFactory,
};
