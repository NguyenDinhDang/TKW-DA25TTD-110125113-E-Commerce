export type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  description?: string;
  rating?: number;
  category?: string;
  imgs: {
    thumbnails: string[];
    previews: string[];
  };
};
