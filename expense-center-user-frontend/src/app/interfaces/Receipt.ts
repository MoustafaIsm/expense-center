/* eslint-disable @typescript-eslint/naming-convention */
export interface Receipt {
  id: number;
  title: string;
  type: string;
  amount: number;
  url: string;
  sub_category_id: number;
  sub_category?: {
    id: number;
    name: string;
    parent_category_id: number;
  };
}
