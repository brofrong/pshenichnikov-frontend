export type category = {
  attributes: {
    category: string;
  };
  id: number;
};

export type project = {
  attributes: {
    Description: string;
    Title: string;
    category: { data: category };
    imgs?: any;
  };
  id: number;
};
