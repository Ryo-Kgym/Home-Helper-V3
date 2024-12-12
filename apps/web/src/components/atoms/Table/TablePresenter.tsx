import type { RefObject } from "react";
import { ActionIcon, ScrollArea, Table } from "@mantine/core";
import { IconArrowBarToDown } from "@tabler/icons-react";

type TablePresenterProps = {
  headerTr: React.ReactNode;
  tbody: React.ReactNode;
  tfoot?: React.ReactNode;
  height: string;
  fontSize: number;
  horizontalSpacing: number;
  verticalSpacing: number;
  viewport: RefObject<HTMLDivElement>;
  scrollToBottom?: () => void;
  toButtonOpen: boolean;
  onMouseMoveHandler: () => void;
  onMouseOutHandler: () => void;
};
export const TablePresenter = ({
  headerTr,
  tbody,
  tfoot,
  height,
  fontSize,
  horizontalSpacing,
  verticalSpacing,
  scrollToBottom,
  viewport,
  toButtonOpen,
  onMouseMoveHandler,
  onMouseOutHandler,
}: TablePresenterProps) => (
  <>
    <ScrollArea
      viewportRef={viewport}
      onMouseOver={onMouseMoveHandler}
      onMouseOut={onMouseOutHandler}
      h={height}
    >
      <Table
        striped
        highlightOnHover
        horizontalSpacing={horizontalSpacing}
        verticalSpacing={verticalSpacing}
        withColumnBorders
        className={`bg-slate-100 sm:table-fixed text-[${fontSize}px]`}
        stickyHeader
        stickyHeaderOffset={0}
      >
        <Table.Thead className={"top-0 bg-white"}>{headerTr}</Table.Thead>
        <Table.Tbody>{tbody}</Table.Tbody>
        {tfoot && (
          <Table.Tfoot className={"sticky bottom-0 bg-white"}>
            {tfoot}
          </Table.Tfoot>
        )}
      </Table>
      {toButtonOpen && <JumpToBottom scrollToBottom={scrollToBottom} />}
    </ScrollArea>
  </>
);

const JumpToBottom = ({
  scrollToBottom,
}: {
  scrollToBottom: (() => void) | undefined;
}) => {
  return null;
  // FIXME: 破損しているので、修正が必要
  return (
    <button
      className={
        "max-sm:button-1 absolute bottom-10 right-10 z-10 border-0 max-sm:right-3"
      }
      onClick={scrollToBottom}
    >
      <ActionIcon variant="default" size={"3em"}>
        <IconArrowBarToDown size="3em" className={"text-slate-400"} />
      </ActionIcon>
    </button>
  );
};
