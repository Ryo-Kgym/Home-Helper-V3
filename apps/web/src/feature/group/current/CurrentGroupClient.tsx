export const CurrentGroupClient = ({ groupName }: { groupName: string }) => {
  return (
    <div className={"flex justify-end px-5 py-2"}>
      <div className={"flex space-x-5 text-xl"}>
        <div>選択中</div>
        <div>{groupName}</div>
      </div>
    </div>
  );
};
