import type { Group } from "@domain/model/Group";
import { groupState } from "@recoil/groupState";
import { useRecoilState } from "recoil";

export const useGroup = () => {
  const [group, setGroup] = useRecoilState(groupState);

  const save = (group: Group) => {
    setGroup(group);
  };
  return { groupId: group.id, groupName: group.name, save };
};
