export type AppDeleteRelations = {
  view: {
    id: string;
    name: string;
  };
  summaries: {
    id: string;
    name: string;
  }[];
  apps: {
    id: string;
    name: string;
  }[];
  fields: {
    id: string;
    name: string;
  }[];
};
