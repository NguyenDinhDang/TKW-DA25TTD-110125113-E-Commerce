import { Product } from "@/types/product";
const shopData: Product[] = [
  {
    title: "Havit HV-G69 USB Gamepad",
    category: "Gaming",
    description: "Wired USB controller for PC gaming with responsive buttons.",
    rating: 4.7,
    reviews: 15,
    price: 59.0,
    discountedPrice: 39.0,
    id: 1,
    imgs: {
      thumbnails: [
        "/images/products/product-1-sm-1.png",
        "/images/products/product-1-sm-2.png",
      ],
      previews: [
        "/images/products/product-1-bg-1.png",
        "/images/products/product-1-bg-2.png",
      ],
    },
  },
  {
    title: "iPhone 14 Plus 128GB",
    category: "Phones",
    description: "Large-screen iPhone with dependable battery life and 128GB storage.",
    rating: 4.8,
    reviews: 5,
    price: 899.0,
    discountedPrice: 749.0,
    id: 2,
    imgs: {
      thumbnails: [
        "/images/products/product-2-sm-1.png",
        "/images/products/product-2-sm-2.png",
      ],
      previews: [
        "/images/products/product-2-bg-1.png",
        "/images/products/product-2-bg-2.png",
      ],
    },
  },
  {
    title: "Apple iMac M1 24-inch 2021",
    category: "Desktop",
    description: "All-in-one desktop with Apple M1 performance and a 24-inch display.",
    rating: 4.6,
    reviews: 5,
    price: 1299.0,
    discountedPrice: 1099.0,
    id: 3,
    imgs: {
      thumbnails: [
        "/images/products/product-3-sm-1.png",
        "/images/products/product-3-sm-2.png",
      ],
      previews: [
        "/images/products/product-3-bg-1.png",
        "/images/products/product-3-bg-2.png",
      ],
    },
  },
  {
    title: "MacBook Air M1 8GB/256GB",
    category: "Laptops",
    description: "Thin and quiet laptop for study, office work, and daily productivity.",
    rating: 4.7,
    reviews: 6,
    price: 999.0,
    discountedPrice: 849.0,
    id: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-4-sm-1.png",
        "/images/products/product-4-sm-2.png",
      ],
      previews: [
        "/images/products/product-4-bg-1.png",
        "/images/products/product-4-bg-2.png",
      ],
    },
  },
  {
    title: "Apple Watch Ultra",
    category: "Wearables",
    description: "Rugged smartwatch for fitness, notifications, and outdoor tracking.",
    rating: 4.5,
    reviews: 3,
    price: 799.0,
    discountedPrice: 699.0,
    id: 5,
    imgs: {
      thumbnails: [
        "/images/products/product-5-sm-1.png",
        "/images/products/product-5-sm-2.png",
      ],
      previews: [
        "/images/products/product-5-bg-1.png",
        "/images/products/product-5-bg-2.png",
      ],
    },
  },
  {
    title: "Logitech MX Master 3 Mouse",
    category: "Accessories",
    description: "Ergonomic wireless mouse for office work and creative workflows.",
    rating: 4.9,
    reviews: 15,
    price: 99.0,
    discountedPrice: 79.0,
    id: 6,
    imgs: {
      thumbnails: [
        "/images/products/product-6-sm-1.png",
        "/images/products/product-6-sm-2.png",
      ],
      previews: [
        "/images/products/product-6-bg-1.png",
        "/images/products/product-6-bg-2.png",
      ],
    },
  },
  {
    title: "Apple iPad Air 5th Gen - 64GB",
    category: "Tablets",
    description: "Light tablet for notes, streaming, drawing, and mobile work.",
    rating: 4.6,
    reviews: 15,
    price: 599.0,
    discountedPrice: 519.0,
    id: 7,
    imgs: {
      thumbnails: [
        "/images/products/product-7-sm-1.png",
        "/images/products/product-7-sm-2.png",
      ],
      previews: [
        "/images/products/product-7-bg-1.png",
        "/images/products/product-7-bg-2.png",
      ],
    },
  },
  {
    title: "Asus RT Dual Band Router",
    category: "Networking",
    description: "Dual-band router for stable home and small-office Wi-Fi coverage.",
    rating: 4.4,
    reviews: 15,
    price: 129.0,
    discountedPrice: 99.0,
    id: 8,
    imgs: {
      thumbnails: [
        "/images/products/product-8-sm-1.png",
        "/images/products/product-8-sm-2.png",
      ],
      previews: [
        "/images/products/product-8-bg-1.png",
        "/images/products/product-8-bg-2.png",
      ],
    },
  },
];

export default shopData;
