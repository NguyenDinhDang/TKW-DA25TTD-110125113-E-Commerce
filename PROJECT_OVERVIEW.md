# TechMart - Tai lieu tong quan du an

## 1. Du an nay la gi?

TechMart la website thuong mai dien tu mau duoc xay dung bang Next.js va React. Website tap trung vao ban hang dien tu nhu dien thoai, laptop, phu kien, thiet bi am thanh, gaming gear va thiet bi thong minh.

Muc tieu cua du an khong chi la hien thi giao dien dep, ma la mo phong cac luong mua sam quen thuoc:

- Xem danh muc san pham.
- Tim va loc san pham trong trang shop co sidebar.
- Xem chi tiet nhanh san pham.
- Them san pham vao gio hang.
- Luu san pham vao wishlist.
- Xem gio hang, checkout va tai khoan nguoi dung.

## 2. Danh cho nguoi khong chuyen CNTT

Co the hieu du an nay nhu mot cua hang online thu nho. Khi nguoi dung vao website, ho thay trang chu co danh muc ben trai, san pham noi bat, uu dai va cac nut di den trang mua hang.

Nhung man hinh quan trong:

- `Home`: Trang chu cua cua hang, co sidebar danh muc va san pham noi bat.
- `Shop`: Noi nguoi dung xem danh sach san pham, loc theo danh muc, gia, mau, kich co.
- `Cart`: Gio hang, noi luu cac mon nguoi dung muon mua.
- `Wishlist`: Danh sach san pham yeu thich.
- `Checkout`: Trang nhap thong tin giao hang va thanh toan.
- `My Account`: Khu vuc thong tin tai khoan va don hang.

Du an hien tai dung du lieu mau nam trong code, chua ket noi co so du lieu that. Neu muon dua vao kinh doanh thuc te, can bo sung backend, quan tri san pham, dang nhap that, thanh toan that va quan ly don hang.

## 3. Danh cho nguoi chuyen CNTT

### Cong nghe chinh

- Next.js App Router.
- React 19.
- TypeScript.
- Tailwind CSS.
- Zustand de quan ly state gio hang, wishlist, quick view va auth.
- Swiper cho carousel.

### Cau truc thu muc quan trong

- `src/app/(site)`: Cac route cua website.
- `src/components/Home`: Trang chu va cac khu vuc tren trang chu.
- `src/components/ShopWithSidebar`: Trang danh sach san pham co sidebar loc.
- `src/components/Shop`: Card san pham va du lieu san pham mau.
- `src/components/Common`: Cac thanh phan dung lai nhu modal, breadcrumb, newsletter, cart sidebar.
- `src/store`: Zustand stores cho cart, wishlist, auth va modal.
- `public/images`: Anh san pham, banner, icon va logo.

### Du lieu san pham

Du lieu san pham mau nam tai:

`src/components/Shop/shopData.ts`

Moi san pham co cac truong chinh:

- `id`: Ma san pham.
- `title`: Ten san pham.
- `category`: Danh muc.
- `description`: Mo ta ngan.
- `price`: Gia goc.
- `discountedPrice`: Gia khuyen mai.
- `reviews`: So luot danh gia.
- `rating`: Diem danh gia.
- `imgs`: Anh thumbnail va anh preview.

### State cua gio hang va wishlist

Zustand stores nam trong `src/store`. Gio hang va wishlist dang luu tren client-side state. Dieu nay phu hop cho prototype, nhung khi lam production nen dong bo voi backend hoac local storage tuy theo yeu cau san pham.

### Cac lenh phat trien

```bash
npm run dev
npm run build
npm run lint
```

### Huong phat trien tiep theo

- Ket noi API san pham va co so du lieu.
- Them trang quan tri san pham, don hang va khach hang.
- Them dang nhap/dang ky that bang provider hoac backend rieng.
- Tich hop thanh toan that.
- Them tim kiem va bo loc co xu ly du lieu that.
- Them test cho gio hang, checkout va cac store quan trong.

## 4. Ghi chu ve tinh trang hien tai

Website da duoc don theo huong giong mot cua hang dien tu hon: trang chu co sidebar danh muc, san pham noi bat, loi ich mua hang va menu giau tinh ung dung hon. Mot so trang mau cu van con trong codebase de co the tai su dung hoac phat trien tiep khi can.
