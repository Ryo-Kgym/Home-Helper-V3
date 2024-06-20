export type AppDeleteRelations = {
  app: {
    id: string;
    name: string;
  };
  fields: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
  importFileHistories: {
    nodes: { id: string; name: string }[];
  };
  importFileRecords: {
    count: number;
  };
  importFileSetting: {
    id: string;
    count: number;
  };
  records: {
    count: number;
  };
  viewApps: {
    nodes: {
      id: string;
      name: string;
    }[];
  };
};
