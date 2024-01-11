import { useRecoilState } from "recoil";
import { groupState } from "@recoil/groupState";
import { Group } from "@domain/model/Group";

export const useGroup = () => {
  const [group, setGroup] = useRecoilState(groupState);

  const save = (group: Group) => {
    setGroup(group);
  };
  return { groupId: group.id, groupName: group.name, save };
};
