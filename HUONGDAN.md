# Huong Dan Su Dung Va Tuy Chinh Template E-commerce

File nay giup ban tu hoc cach lam viec voi template, tu chay du an, them/xoa/sua san pham, sua menu, sua hinh anh va hieu cac file quan trong.

Du an nay la website ban hang dung Next.js, React, TypeScript, Tailwind CSS va Zustand.

## 1. Cach chay du an

Mo terminal tai thu muc du an:

```bash
cd f:\Workspace\E-commerce
```

Neu moi tai code ve hoac chua co `node_modules`, chay:

```bash
npm install
```

Chay che do lap trinh:

```bash
npm run dev
```

Sau do mo trinh duyet vao:

```text
http://localhost:3000
```

Build thu truoc khi dua len hosting:

```bash
npm run build
```

Chay ban build:

```bash
npm run start
```

## 2. Cau truc thu muc quan trong

```text
src/app
```

Noi khai bao cac trang cua Next.js. Vi du:

- `src/app/(site)/page.tsx`: trang chu.
- `src/app/(site)/(pages)/cart/page.tsx`: trang gio hang.
- `src/app/(site)/(pages)/checkout/page.tsx`: trang thanh toan.
- `src/app/(site)/(pages)/shop-with-sidebar/page.tsx`: trang danh sach san pham.
- `src/app/(site)/(pages)/shop-details/page.tsx`: trang chi tiet san pham.

```text
src/components
```

Noi chua cac khoi giao dien. Moi tinh nang thuong co mot thu muc rieng:

- `Header`: menu tren dau trang.
- `Footer`: chan trang.
- `Home`: cac section tren trang chu.
- `Shop`: card san pham va data san pham.
- `ShopWithSidebar`: trang shop co bo loc ben trai.
- `ShopDetails`: trang chi tiet san pham.
- `Cart`: trang gio hang.
- `Wishlist`: trang yeu thich.
- `Checkout`: trang thanh toan.

```text
src/store
```

Noi luu state bang Zustand:

- `cartStore.ts`: gio hang.
- `wishlistStore.ts`: danh sach yeu thich.
- `quickViewStore.ts`: san pham dang xem nhanh/chi tiet.

```text
public/images
```

Noi chua hinh anh. Khi dung trong code, duong dan bat dau tu `/images/...`.

Vi du file that:

```text
public/images/products/product-1-bg-1.png
```

Thi trong code viet:

```ts
"/images/products/product-1-bg-1.png"
```

## 3. Them, xoa, sua san pham

File quan trong nhat:

```text
src/components/Shop/shopData.ts
```

File nay dang export mang `shopData`. Cac noi sau dang doc san pham tu file nay:

- Trang chu: `src/components/Home/NewArrivals/index.tsx`
- Best Seller: `src/components/Home/BestSeller/index.tsx`
- Trang shop: `src/components/ShopWithSidebar/index.tsx`

### 3.1. Cau truc mot san pham

Mot san pham co dang:

```ts
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
}
```

Y nghia cac truong:

- `id`: ma san pham, moi san pham phai co id rieng, khong trung nhau.
- `title`: ten san pham hien thi.
- `category`: danh muc san pham.
- `description`: mo ta ngan.
- `rating`: diem danh gia.
- `reviews`: so luot danh gia.
- `price`: gia goc.
- `discountedPrice`: gia sau giam.
- `imgs.thumbnails`: anh nho.
- `imgs.previews`: anh lon.

Kieu du lieu cua san pham nam tai:

```text
src/types/product.ts
```

Neu ban them truong moi cho san pham, vi du `stock`, `brand`, `sku`, thi nen them vao type `Product` trong file nay.

### 3.2. Them san pham moi

Mo file:

```text
src/components/Shop/shopData.ts
```

Them mot object moi vao trong mang `shopData`, truoc dau `];`.

Vi du:

```ts
{
  title: "Sony WH-1000XM5 Headphones",
  category: "Audio",
  description: "Wireless noise-cancelling headphones for travel and work.",
  rating: 4.9,
  reviews: 22,
  price: 399.0,
  discountedPrice: 329.0,
  id: 9,
  imgs: {
    thumbnails: [
      "/images/products/product-9-sm-1.png",
      "/images/products/product-9-sm-2.png",
    ],
    previews: [
      "/images/products/product-9-bg-1.png",
      "/images/products/product-9-bg-2.png",
    ],
  },
},
```

Sau do them anh vao:

```text
public/images/products/
```

Can dam bao ten anh trong code trung voi ten file that.

### 3.3. Sua san pham

Mo:

```text
src/components/Shop/shopData.ts
```

Tim san pham theo `id` hoac `title`, roi sua cac gia tri:

```ts
title: "Ten moi",
price: 1200.0,
discountedPrice: 999.0,
description: "Mo ta moi",
category: "Danh muc moi",
```

Neu chi muon doi hinh, sua:

```ts
imgs: {
  thumbnails: [
    "/images/products/ten-anh-nho-1.png",
    "/images/products/ten-anh-nho-2.png",
  ],
  previews: [
    "/images/products/ten-anh-lon-1.png",
    "/images/products/ten-anh-lon-2.png",
  ],
},
```

### 3.4. Xoa san pham

Trong `shopData.ts`, xoa ca object cua san pham do, tu dau `{` den dau `},`.

Luu y:

- Neu xoa san pham dang co `id: 4`, cac san pham khac khong bat buoc phai danh so lai.
- Chi can dam bao cac `id` con lai khong trung nhau.
- Neu website dang mo va gio hang da luu san pham cu, hay clear gio hang tren UI hoac xoa localStorage cua trinh duyet.

## 4. Sua so san pham hien thi o trang chu

Trang chu hien tat ca san pham moi trong:

```text
src/components/Home/NewArrivals/index.tsx
```

Doan quan trong:

```tsx
{shopData.map((item, key) => (
  <ProductItem item={item} key={key} />
))}
```

Neu chi muon hien 4 san pham dau:

```tsx
{shopData.slice(0, 4).map((item, key) => (
  <ProductItem item={item} key={key} />
))}
```

Best Seller nam trong:

```text
src/components/Home/BestSeller/index.tsx
```

Doan nay dang lay san pham thu 2 den thu 7:

```tsx
{shopData.slice(1, 7).map((item, key) => (
  <SingleItem item={item} key={key} />
))}
```

Muon lay 6 san pham dau:

```tsx
{shopData.slice(0, 6).map((item, key) => (
  <SingleItem item={item} key={key} />
))}
```

## 5. Sua menu tren dau trang

File menu:

```text
src/components/Header/menuData.ts
```

Moi item co dang:

```ts
{
  id: 2,
  title: "Shop",
  newTab: false,
  path: "/shop-with-sidebar",
}
```

Y nghia:

- `id`: ma menu, khong trung nhau.
- `title`: chu hien tren menu.
- `path`: duong dan khi bam.
- `newTab`: `true` neu muon mo tab moi, `false` neu mo cung tab.
- `submenu`: menu con.

Them menu moi:

```ts
{
  id: 7,
  title: "Blog",
  newTab: false,
  path: "/blog",
},
```

Sua ten menu:

```ts
title: "Shop",
```

Thanh:

```ts
title: "San pham",
```

Xoa menu: xoa ca object menu do trong mang `menuData`.

## 6. Sua danh muc tren trang chu

File:

```text
src/components/Home/Categories/categoryData.ts
```

Moi danh muc co dang:

```ts
{
  title: "Laptop & PC",
  id: 2,
  img: "/images/categories/categories-02.png",
}
```

Muon them danh muc, them object moi. Muon doi hinh, dat anh vao:

```text
public/images/categories/
```

Roi sua `img`.

## 7. Sua hinh hero/banner trang chu

Cac file hay sua:

- `src/components/Home/Hero/index.tsx`
- `src/components/Home/Hero/HeroCarousel.tsx`
- `src/components/Home/PromoBanner/index.tsx`
- `src/components/Home/Countdown/index.tsx`

Anh nam trong:

- `public/images/hero/`
- `public/images/promo/`
- `public/images/countdown/`

Nguyen tac duong dan giong nhau:

```text
public/images/hero/hero-01.png
```

Trong code:

```tsx
"/images/hero/hero-01.png"
```

## 8. Cach gio hang va wishlist hoat dong

Gio hang nam trong:

```text
src/store/cartStore.ts
```

Wishlist nam trong:

```text
src/store/wishlistStore.ts
```

Template dung Zustand voi `persist`, nghia la du lieu gio hang/wishlist duoc luu trong localStorage cua trinh duyet. Khi refresh trang, gio hang van con.

Nut "Add to cart" trong card san pham nam o:

```text
src/components/Common/ProductItem.tsx
```

Doan them vao gio hang:

```tsx
addItem({
  id: String(item.id),
  title: item.title,
  price: item.discountedPrice || item.price,
  image: item.imgs.previews[0],
  quantity: 1,
});
```

Neu muon gio hang lay gia goc thay vi gia giam:

```tsx
price: item.price,
```

## 9. Cach trang chi tiet san pham hoat dong

Trang chi tiet:

```text
src/components/ShopDetails/index.tsx
```

Khi bam vao ten san pham hoac quick view, code luu san pham dang xem vao store/localStorage, sau do trang chi tiet doc lai san pham do.

Luu y quan trong:

- Trang `/shop-details` hien san pham gan nhat ban da bam.
- Day chua phai trang chi tiet theo URL rieng tung san pham, vi du `/shop-details/1`.
- Neu muon lam nang cao hon, ban co the tao dynamic route theo id sau nay.

## 10. Sua giao dien bang Tailwind CSS

Template dung Tailwind CSS, nen class nam truc tiep trong JSX.

Vi du:

```tsx
className="font-semibold text-xl text-dark"
```

Mot so class hay gap:

- `text-xl`: co chu.
- `font-semibold`: do dam chu.
- `text-dark`: mau chu.
- `bg-white`: nen trang.
- `rounded-lg`: bo goc.
- `p-4`: padding.
- `mt-6`: margin top.
- `grid grid-cols-4`: chia cot.

Mau va cau hinh Tailwind nam trong:

```text
tailwind.config.ts
```

CSS tong nam trong:

```text
src/app/css/style.css
```

## 11. Quy trinh lam viec de tu hoc code

Nen lam theo vong lap nay:

1. Chay `npm run dev`.
2. Mo trang tren trinh duyet.
3. Chon mot noi muon sua, vi du ten san pham.
4. Tim chu do trong code bang VS Code Search.
5. Sua mot thay doi nho.
6. Luu file va xem trinh duyet cap nhat.
7. Neu loi, doc terminal va trinh duyet de biet file nao loi.

Meo tim nhanh:

- Muon sua chu nao tren web, copy chu do va tim trong VS Code.
- Muon sua anh, tim ten file anh hoac thu muc trong `public/images`.
- Muon biet component nao dang dung data, tim ten bien, vi du `shopData`.

## 12. Loi thuong gap

### Anh khong hien

Kiem tra:

- File anh co that trong `public/images/...` khong.
- Duong dan trong code co bat dau bang `/images/...` khong.
- Ten file co dung chu hoa/chu thuong khong.

Sai:

```ts
"public/images/products/a.png"
```

Dung:

```ts
"/images/products/a.png"
```

### Them san pham bi loi TypeScript

Thuong la thieu dau phay hoac thieu field bat buoc.

Kiem tra object san pham co du:

```ts
title,
reviews,
price,
discountedPrice,
id,
imgs
```

### Sua xong ma gio hang van hien du lieu cu

Vi gio hang luu trong localStorage. Hay:

- Bam xoa gio hang neu UI co nut.
- Hoac mo DevTools cua trinh duyet, vao Application, Local Storage, xoa `cart-storage`, `wishlist-storage`, `quick-view-storage`.

### Menu link khong chay

Kiem tra `path` co dung route khong.

Vi du neu co file:

```text
src/app/(site)/(pages)/contact/page.tsx
```

Thi duong dan la:

```ts
"/contact"
```

## 13. Bai tap de ban tu thuc hanh

Lam tung bai nho:

1. Doi ten menu `Shop` thanh `San pham`.
2. Them mot san pham moi vao `shopData.ts`.
3. Doi anh cua san pham dau tien.
4. Cho trang chu chi hien 4 san pham moi.
5. Doi ten section `Best Sellers` thanh `Ban chay`.
6. Them mot danh muc moi vao `categoryData.ts`.
7. Doi gia cua mot san pham va test nut Add to cart.
8. Xoa mot san pham va xem trang shop cap nhat.

## 14. Cac file nen doc dau tien

Neu ban muon hoc code theo thu tu, doc cac file nay:

1. `src/components/Shop/shopData.ts`
2. `src/types/product.ts`
3. `src/components/Common/ProductItem.tsx`
4. `src/components/Home/NewArrivals/index.tsx`
5. `src/components/ShopWithSidebar/index.tsx`
6. `src/store/cartStore.ts`
7. `src/store/wishlistStore.ts`
8. `src/components/Header/menuData.ts`

Moi lan doc, hay tu hoi:

- Component nay nhan data tu dau?
- No hien thi data bang bien nao?
- Khi bam nut thi ham nao duoc goi?
- State nam trong component hay trong store?

## 15. Ghi chu ve du an hien tai

Trong du an co ca thu muc `src/redux`, nhung hien cac component moi dang dung Zustand trong `src/store`. Khi hoc va sua gio hang/wishlist, uu tien doc `src/store` truoc.

Mot so chu tieng Viet trong code co the dang bi loi ma hoa, vi du hien thanh `ThÃ¡ng nÃ y`. Neu gap, chi can sua lai thanh tieng Viet dung trong file component tuong ung.

Nen sua tung phan nho, test ngay sau moi thay doi. Cach hoc nhanh nhat voi template la: sua mot dong, xem UI thay doi, roi lan nguoc xem data di qua component nao.
