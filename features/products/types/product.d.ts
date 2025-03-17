export interface IProduct {
  _id: string;
  id: string;
  name: string;
  slug: string;
  images: string[];
  category: string;
  product_id: string;
  side: number;
  price: number;
  display_high_price: number;
  process: {
    img: boolean;
    step: number;
  };
  source: string;
  shop_id: string;
  warehouse_id: string;
  updateTime: number;
  is_tm: number;
  pre_build_product_id: string;
  version: number;
  info: {
    edit_time: {
      update_time: number;
      create_time: number;
    };
  };
  view_users_cnt: number;
  promotion: {
    name: string;
    end_time: number;
  };
}
