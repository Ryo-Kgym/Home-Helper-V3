import { Table, type TableProps } from "../../../components/atoms/Table";

export const GenreListPresenter = ({
  tablePropsList,
}: {
  tablePropsList: TableProps[];
}) => (
  <Table
    header={["ジャンル名", "ジャンル区分", "収支区分", "有効・無効", "表示順"]}
    tablePropsList={tablePropsList}
    size={"xs"}
    defaultBottom={false}
  />
);
