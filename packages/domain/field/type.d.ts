type BaseProperties = {
  name: string;
  valueType: string;
  initialValue: string;
  disabled?: boolean;
};

export type FieldProperties = {
  text: {
    name: "Text";
  } & BaseProperties;
  selectBox: {
    name: "SelectBox";
    data: { label: string; value: string }[];
  } & BaseProperties;
  multipleText: {
    name: "MultipleText";
  } & BaseProperties;
};

export type FieldKind = keyof FieldProperties;
