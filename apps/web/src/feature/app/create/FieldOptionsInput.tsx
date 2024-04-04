import type { AppFieldOptions } from "@feature/app/create/app-field-value";
import type { FieldKind } from "@oneforall/domain/field/type";
import type { ComponentProps, ReactNode } from "react";
import React from "react";
import { FieldOptionsDateInputFactory } from "@feature/app/create/FieldOptionsDateInputFactory";
import { FieldOptionsLookUpFactory } from "@feature/app/create/FieldOptionsLookUpFactory";
import { FieldOptionsSelectBoxFactory } from "@feature/app/create/FieldOptionsSelectBoxFactory";

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
  selectBox: FieldOptionsSelectBoxFactory,
  lookup: FieldOptionsLookUpFactory,
  date: FieldOptionsDateInputFactory,
};
