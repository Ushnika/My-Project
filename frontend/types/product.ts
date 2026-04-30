export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{
    rate: number;
    count: number;
  }
}

export type ProductListProps ={
    data: Product[];
    page: number;
    limit: number;
    total: number
}