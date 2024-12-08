import { useRecoilState } from "recoil";

import { Group } from "../../domain/model/Group";
import { groupState } from "../../recoil/groupState";

export const useGroup = () => {
  const [group, setGroup] = useRecoilState(groupState);

  const save = (group: Group) => {
    setGroup(group);
  };
  return { groupId: group.id, groupName: group.name, save };
};
