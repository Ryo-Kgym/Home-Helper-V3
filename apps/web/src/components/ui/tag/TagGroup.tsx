import type { ComponentProps, FC } from "react";

import { Tag } from "./Tag";

type Props = {
  tags: (ComponentProps<typeof Tag> & { id: string })[];
};

export const TagGroup: FC<Props> = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <Tag key={tag.id} label={tag.label} colorCode={tag.colorCode} />
      ))}
    </>
  );
};
