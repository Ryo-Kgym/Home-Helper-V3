import { Text, View } from "react-native";

import type { IocomeType } from "~/types/iocome-type";
import { EditableIocomeType, EditableYear, FilterButton, Modal } from "~/ui";

export const FilterModal = ({
  visible,
  setVisible,
  filterYear,
  setFilterYear,
  iocomeType,
  setIocomeType,
  year,
}: {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  filterYear: number;
  setFilterYear: (year: number) => void;
  iocomeType: IocomeType;
  setIocomeType: (iocomeType: IocomeType) => void;
  year: Date;
}) => {
  return (
    <>
      <FilterButton pressHandler={() => setVisible(!visible)} />
      <Modal visible={visible} setVisible={setVisible}>
        <View>
          <Text>年</Text>
          <EditableYear
            value={filterYear}
            setValue={setFilterYear}
            defaultValue={year.getFullYear()}
          />
          <Text>収支</Text>
          <EditableIocomeType value={iocomeType} setValue={setIocomeType} />
        </View>
      </Modal>
    </>
  );
};
