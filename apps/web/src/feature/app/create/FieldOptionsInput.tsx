import { FieldOptionsDateInputFactory } from "@feature/app/create/FieldOptionsDateInputFactory";
import { FieldOptionsLookUpInputFactory } from "@feature/app/create/FieldOptionsLookUpInputFactory";
import { FieldOptionsSelectBoxInputFactory } from "@feature/app/create/FieldOptionsSelectBoxInputFactory";
import React from "react";

import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import type { ComponentProps, ReactNode } from "react";

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
};
