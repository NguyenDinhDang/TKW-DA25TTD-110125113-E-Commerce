# TechMart - Frontend Thương mại điện tử tĩnh

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38bdf8?style=flat-square&logo=tailwind-css)
![Zustand](https://img.shields.io/badge/Zustand-State%20Management-orange?style=flat-square)
![License](https://img.shields.io/badge/License-Free%20to%20use-success?style=flat-square)

> TechMart là giao diện thương mại điện tử tĩnh, phát triển bằng Next.js, React, Tailwind CSS và Zustand.
> Dự án không cần backend. Dữ liệu tạm thời được lưu trên máy khách qua `localStorage`.

## Giới thiệu

TechMart là mẫu frontend thương mại điện tử chỉ dùng phía khách, phù hợp cho trình diễn giao diện, nguyên mẫu nhanh và triển khai tĩnh.

Người dùng có trải nghiệm mua sắm cơ bản như sau:

- Duyệt sản phẩm
- Lọc và tìm kiếm sản phẩm
- Xem nhanh chi tiết sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Lưu sản phẩm yêu thích vào wishlist
- Mô phỏng đăng nhập/đăng ký và hồ sơ người dùng
- Giao diện thanh toán demo

## Giáo viên hướng dẫn

- **Môn: Thiết kế Web**
- **Giáo viên hướng dẫn: Đoàn Phước Miền**
- **Email: antonio86doan@gmail.com**

## Vì sao chọn dự án này

- Không cần cài đặt backend
- Triển khai tĩnh nhanh chóng
- Quản lý trạng thái client nhẹ nhàng bằng Zustand
- Dễ mở rộng thành cửa hàng thực tế sau này

## Các tính năng chính

| Khu vực | Chức năng | Lưu trữ |
|---|---|---|
| Giỏ hàng | Thêm/xóa sản phẩm, cập nhật số lượng, tính tổng | `localStorage` |
| Wishlist | Lưu sản phẩm yêu thích để xem lại | `localStorage` |
| Xác thực | Mô phỏng đăng nhập/đăng ký/hồ sơ | `localStorage` |
| Quick View | Xem nhanh sản phẩm trong modal | Trạng thái client |
| Shop UI | Lưới sản phẩm, trang chi tiết, bộ lọc, tìm kiếm | Dữ liệu tĩnh |
| Checkout | Giao diện thanh toán demo | Client side |

## Công nghệ sử dụng

- **Next.js 16.1.6** với App Router
- **React 19.2.0**
- **TypeScript 5.2.2**
- **Tailwind CSS 3.3.3**
- **Zustand** để quản lý trạng thái nhẹ
- **Swiper** cho carousel/slider
- **React Hot Toast** cho thông báo
- **react-range-slider-input** cho lọc giá

## Sơ đồ luồng

```mermaid
flowchart LR
  A[Người dùng] --> B[Trang chủ / Cửa hàng]
  B --> C[Chi tiết sản phẩm]
  C --> D[Xem nhanh]
  C --> E[Giỏ hàng]
  C --> F[Wishlist]
  E --> G[Thanh toán]
  F --> E
  G --> H[Kiểm tra đơn hàng (demo)]
```

## Cấu trúc dự án

```txt
src/
|-- app/                 # Các trang App Router của Next.js
|-- components/          # Các thành phần giao diện và phần chức năng
|   |-- Home/            # Các phần trên trang chủ
|   |-- Shop/            # Thẻ sản phẩm và dữ liệu shop
|   `-- Common/          # Thành phần dùng chung
|-- store/               # Các store Zustand
|-- types/               # Kiểu TypeScript
`-- css/                 # Style toàn cục
```

## Các store chính

- `cartStore`
- `wishlistStore`
- `authStore`
- `quickViewStore`
- `cartSidebarModalStore`

## Các khóa Local Storage

- `cart-storage`
- `wishlist-storage`
- `auth-storage`

## Khởi động nhanh

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` trên trình duyệt.

## Xây dựng cho production

```bash
npm run build
npm run start
```

## Các lệnh có sẵn

- `npm run dev` - chạy server phát triển
- `npm run build` - tạo bản build production
- `npm run start` - chạy server production
- `npm run lint` - chạy ESLint

## Ghi chú xuất tĩnh

Dự án sử dụng cấu hình xuất tĩnh trong `next.config.js`:

```js
output: 'export'
```

Điều này có nghĩa là:

- Không có API route
- Không có server-side rendering
- Không có xác thực backend thực sự
- Không có kết nối cơ sở dữ liệu thật

## Lưu ý quan trọng

- Phù hợp với hosting tĩnh và demo giao diện
- Dễ tùy chỉnh bằng sản phẩm của riêng bạn
- Có thể chuyển đổi thành ứng dụng thương mại điện tử thực tế sau này
- Trạng thái client sẽ mất khi xóa bộ nhớ trình duyệt

## Ví dụ sử dụng

### Giỏ hàng

```ts
import { useCartStore } from '@/store';

export function AddToCartButton({ product }) {
  const { addItem } = useCartStore();

  return <button onClick={() => addItem(product)}>Thêm vào giỏ</button>;
}
```

### Xác thực

```ts
import { useAuthStore } from '@/store';

export function WelcomeBanner() {
  const { user, isLoggedIn, login, logout } = useAuthStore();

  if (!isLoggedIn) {
    return <button onClick={() => login('demo@email.com', 'password')}>Đăng nhập</button>;
  }

  return <p>Chào mừng, {user?.name}</p>;
}
```

## Tài liệu tham khảo

- [Hướng dẫn chuyển đổi Zustand](./ZUSTAND_MIGRATION_GUIDE.md)
- [Tổng quan dự án](./PROJECT_OVERVIEW.md)
- [Next.js Docs](https://nextjs.org/docs)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)


## Giấy phép

Dự án được phép sử dụng và chỉnh sửa cho mục đích cá nhân hoặc thương mại.

---

Dự án xây dựng để demo giao diện sạch, phát triển nhanh và triển khai tĩnh.
