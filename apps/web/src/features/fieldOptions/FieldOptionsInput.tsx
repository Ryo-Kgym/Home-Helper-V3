import React, { ComponentProps, ReactNode } from "react";
import { FieldKind } from "@oneforall/domain/field/type";
import { AppFieldOptions } from "@oneforall/domain/schema/appFieldValue";

import { FieldOptionsDateInputFactory } from "./FieldOptionsDateInputFactory";
import { FieldOptionsLookUpInputFactory } from "./FieldOptionsLookUpInputFactory";
import { FieldOptionsNumericInputFactory } from "./FieldOptionsNumericInputFactory";
import { FieldOptionsSelectBoxInputFactory } from "./FieldOptionsSelectBoxInputFactory";

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
  selectBox: FieldOptionsSelectBoxInputFactory,
  lookup: FieldOptionsLookUpInputFactory,
  date: FieldOptionsDateInputFactory,
  numeric: FieldOptionsNumericInputFactory,
};
