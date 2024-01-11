/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TransferListItem } from "..";
import { Combobox, useCombobox, ScrollArea } from "@mantine/core";

const TransferBox = ({
  index,
  data,
  setData,
  height = "60vh",
}: {
  index: 0 | 1;
  data: [TransferListItem[], TransferListItem[]];
  setData: (data: [TransferListItem[], TransferListItem[]]) => void;
  height?: string | number;
}) => {
  const combobox = useCombobox({ opened: true });

  const groupedData = data[index]
    .map((item) => item.group)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((group) => ({
      group,
      items: data[index].filter((item) => item.group === group),
    }));

  const moveCategoryHandler = (item: TransferListItem) => {
    const from = index;
    const to = index === 0 ? 1 : 0;

    const fromData = data[from].filter(
      (dataItem) => dataItem.value !== item.value,
    );
    const toData = [...data[to], item];

    setData(from === 0 ? [fromData, toData] : [toData, fromData]);
  };

  const moveGenreHandler = (items: TransferListItem[]) => {
    const from = index;
    const to = index === 0 ? 1 : 0;

    const fromData = data[from].filter(
      (dataItem) => !items.map((item) => item.value).includes(dataItem.value),
    );
    const toData = [...data[to], ...items];

    setData(from === 0 ? [fromData, toData] : [toData, fromData]);
  };

  return (
    <Combobox store={combobox} zIndex={0}>
      <Combobox.Target>
        <div></div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea type="scroll" h={height}>
            {groupedData.map((group) => (
              <Combobox.Group
                key={group.group}
                label={<div className={"-separator-horizontal"}></div>}
              >
                <Combobox.Option
                  value={group.group ?? ""}
                  onClick={() => {
                    moveGenreHandler(group.items);
                  }}
                >
                  <div className={"text-gray-400 text-xs"}>{group.group}</div>
                </Combobox.Option>
                {group.items.map((item) => (
                  <Combobox.Option
                    key={item.value}
                    value={item.value}
                    onClick={() => {
                      moveCategoryHandler(item);
                    }}
                  >
                    {item.label}
                  </Combobox.Option>
                ))}
              </Combobox.Group>
            ))}
          </ScrollArea>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

type TransferListContainerProps = {
  data: [TransferListItem[], TransferListItem[]];
  setData: (_: [TransferListItem[], TransferListItem[]]) => void;
};
export const MantineTransferList = ({
  data,
  setData,
}: TransferListContainerProps) => (
  <div className={"grid grid-cols-2"}>
    <TransferBox index={0} data={data} setData={setData} />
    <TransferBox index={1} data={data} setData={setData} />
  </div>
);
