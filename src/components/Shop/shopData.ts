import { Product } from "@/types/product";

const shopData: Product[] = [
  {
    title: "Havit HV-G69 USB Gamepad",
    category: "Gaming",
    description: "Tay cầm chơi game cổng USB cho PC với các nút bấm nhạy.",
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
    description: "Điện thoại iPhone màn hình lớn với dung lượng pin trâu và bộ nhớ 128GB.",
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
    description: "Máy tính để bàn tất-cả-trong-một hiệu năng chip M1 và màn hình 24 inch cực đẹp.",
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
    description: "Laptop siêu mỏng nhẹ và chạy êm ái, lý tưởng cho học tập, văn phòng và công việc hàng ngày.",
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
    description: "Đồng hồ thông minh siêu bền hỗ trợ thể thao, nhận thông báo và theo dõi ngoài trời.",
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
    description: "Chuột không dây công thái học phục vụ tối ưu cho văn phòng và thiết kế sáng tạo.",
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
    description: "Máy tính bảng mỏng nhẹ giúp ghi chú, xem phim, vẽ và làm việc di động dễ dàng.",
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
    description: "Bộ định tuyến băng tần kép cho vùng phủ sóng Wi-Fi ổn định tại nhà và văn phòng nhỏ.",
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
  // {
  //   title: "Xiaomi 17T pro",
  //   category: "Phones",
  //   description: "Siêu phẩm flagship tương lai với cấu hình đột phá, dẫn đầu xu hướng công nghệ và hiệu năng đỉnh cao. Hệ thống camera đỉnh cấp cùng công nghệ sạc siêu tốc, mang lại trải nghiệm mượt mà không giới hạn.",
  //   rating: 4.8,
  //   reviews: 12,
  //   price: 799.0,
  //   discountedPrice: 699.0,
  //   id: 9,
  //   imgs: {
  //     thumbnails: [
  //       "/images/products/image1.jpeg",
  //       "/images/products/image1.jpeg",
  //     ],
  //     previews: [
  //       "/images/products/image1.jpeg",
  //       "/images/products/image1.jpeg",
  //     ],
  //   },
  // },
  {
    title: "Iphone 17 Promax",
    category: "Phones",
    description: "Đột phá hiệu năng với chip Apple M4 siêu mạnh mẽ ẩn bên trong thiết kế mỏng nhẹ, sang trọng đẳng cấp. Màn hình Retina sắc nét, thời lượng pin ấn tượng cùng khả năng vận hành êm ái, tối ưu cho mọi công việc.",
    rating: 4.9,
    reviews: 24,
    price: 1299.0,
    discountedPrice: 1199.0,
    id: 10,
    imgs: {
      thumbnails: [
        "/images/products/image2.png",
        "/images/products/image2.png",
      ],
      previews: [
        "/images/products/image2.png",
        "/images/products/image2.png",
      ],
    },
  },
  {
    title: "Laptop MacBook Air M4",
    category: "Laptops",
    description: "Đột phá hiệu năng với chip Apple M4 siêu mạnh mẽ ẩn bên trong thiết kế mỏng nhẹ, sang trọng đẳng cấp. Màn hình Retina sắc nét, thời lượng pin ấn tượng cùng khả năng vận hành êm ái, tối ưu cho mọi công việc.",
    rating: 4.9,
    reviews: 18,
    price: 1199.0,
    discountedPrice: 1099.0,
    id: 11,
    imgs: {
      thumbnails: [
        "/images/products/image3.jpeg",
        "/images/products/image3.jpeg",
      ],
      previews: [
        "/images/products/image3.jpeg",
        "/images/products/image3.jpeg",
      ],
    },
  },
  {
    title: "Bàn phím cơ AKKO MU01 Mountain Seclusion",
    category: "Accessories",
    description: "Tuyệt tác bàn phím cơ vỏ gỗ cao cấp, mang đậm phong cách nghệ thuật sơn thủy 'Mountain Seclusion' độc đáo. Trải nghiệm gõ phím êm ái, kết nối đa chế độ linh hoạt và là điểm nhấn hoàn hảo cho góc làm việc tối giản.",
    rating: 4.7,
    reviews: 8,
    price: 129.0,
    discountedPrice: 99.0,
    id: 12,
    imgs: {
      thumbnails: [
        "/images/products/image4.png",
        "/images/products/image4.png",
      ],
      previews: [
        "/images/products/image4.png",
        "/images/products/image4.png",
      ],
    },
  },
  {
    title: "Củ sạc Apple USB-C Power Adapter 20W",
    category: "Accessories",
    description: "Lựa chọn hoàn hảo cho iPhone 12 trở lên với công suất sạc nhanh 20W chuẩn Power Delivery ổn định. Kích thước siêu nhỏ gọn, bảo vệ pin tối đa và tương thích tốt với các dòng iPhone, iPad hiện nay.",
    rating: 4.6,
    reviews: 15,
    price: 29.0,
    discountedPrice: 19.0,
    id: 13,
    imgs: {
      thumbnails: [
        "/images/products/image5.jpeg",
        "/images/products/image5.jpeg",
      ],
      previews: [
        "/images/products/image5.jpeg",
        "/images/products/image5.jpeg",
      ],
    },
  },
  {
    title: "Củ sạc Apple USB-C Power Adapter 67W",
    category: "Accessories",
    description: "Công suất 67W mạnh mẽ, tối ưu hóa thời gian sạc nhanh và an toàn cho các dòng MacBook Air và MacBook Pro. Thiết kế củ sạc vuông vắn đặc trưng của Apple, nhỏ gọn tiện lợi để bạn mang theo đi làm hay đi du lịch.",
    rating: 4.7,
    reviews: 11,
    price: 59.0,
    discountedPrice: 49.0,
    id: 14,
    imgs: {
      thumbnails: [
        "/images/products/image6.png",
        "/images/products/image6.png",
      ],
      previews: [
        "/images/products/image6.png",
        "/images/products/image6.png",
      ],
    },
  },
  {
    title: "Cáp sạc Apple Type-C sang Type-C",
    category: "Accessories",
    description: "Cáp sạc chính hãng Apple với chất liệu bền bỉ, hỗ trợ truyền tải dữ liệu và sạc nhanh an toàn tuyệt đối. Tương thích hoàn hảo cho MacBook, iPad và các dòng iPhone thế hệ mới có cổng Type-C.",
    rating: 4.5,
    reviews: 20,
    price: 19.0,
    discountedPrice: 15.0,
    id: 15,
    imgs: {
      thumbnails: [
        "/images/products/image7.jpeg",
        "/images/products/image7.jpeg",
      ],
      previews: [
        "/images/products/image7.jpeg",
        "/images/products/image7.jpeg",
      ],
    },
  },
  {
    title: "Cáp chuyển đổi cổng USB sang MagSafe 2",
    category: "Accessories",
    description: "Giải pháp tiện lợi giúp tái sử dụng các bộ sạc cổng USB tiêu chuẩn để cấp nguồn an toàn cho MacBook đời cũ. Thiết kế nhỏ gọn, kết nối nam châm MagSafe 2 chắc chắn và tự động ngắt khi có va chạm để bảo vệ máy.",
    rating: 4.4,
    reviews: 7,
    price: 25.0,
    discountedPrice: 19.0,
    id: 16,
    imgs: {
      thumbnails: [
        "/images/products/image8.jpeg",
        "/images/products/image8.jpeg",
      ],
      previews: [
        "/images/products/image8.jpeg",
        "/images/products/image8.jpeg",
      ],
    },
  },
];

export default shopData;
