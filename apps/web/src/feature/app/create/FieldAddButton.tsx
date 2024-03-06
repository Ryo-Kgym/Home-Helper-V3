export const FieldAddButton = ({
  clickHandler,
}: {
  clickHandler: () => void;
}) => {
  return (
    <button
      className={"p-2 hover:bg-blue-100 active:bg-blue-300"}
      onClick={clickHandler}
    >
      フィールド追加
    </button>
  );
};
