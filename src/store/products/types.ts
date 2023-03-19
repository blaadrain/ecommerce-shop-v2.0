export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Product = {
  imgUrl: string;
  title: string;
  price: number;
  description: string;
};

export type ProductsSliceState = {
  items: Product[];
  status: Status;
};
