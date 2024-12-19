import { TagListClient } from "./TagListClient";

export const TagListServer = async () => {
  return (
    <TagListClient
      tags={[
        {
          id: "1",
          name: "tag1",
          colorCode: "#FF0000",
          count: 1,
        },
        {
          id: "2",
          name: "tag2",
          colorCode: "#00FF00",
          count: 2,
        },
      ]}
    />
  );
};
