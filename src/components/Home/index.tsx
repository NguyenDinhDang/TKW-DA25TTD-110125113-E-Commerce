import React from "react";
import Link from "next/link";
import Image from "next/image";
import shopData from "../Shop/shopData";
import SingleGridItem from "../Shop/SingleGridItem";
import Newsletter from "../Common/Newsletter";

const categories = [
  { name: "Điện thoại", count: 18 },
  { name: "Máy tính xách tay", count: 12 },
  { name: "Tai nghe", count: 24 },
  { name: "Các sản phẩm chơi game", count: 16 },
  { name: "Nhà thông minh", count: 9 },
  { name: "Phụ kiện", count: 31 },
];

const quickStats = [
  "Giao hàng miễn phí từ 500k",
  "Sản phẩm có thể hoàn trả trong 7 ngày",
  "Thanh toán an toàn",
];

const Home = () => {
  const featuredProducts = shopData.slice(0, 6);

  return (
    <main className="bg-[#f3f4f6] pt-46 sm:pt-42 lg:pt-34 xl:pt-46">
      <section className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-10">
        <div className="grid grid-cols-1 xl:grid-cols-[270px_1fr] gap-7.5">
          <aside className="bg-white rounded-lg shadow-1 p-5 h-fit">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-lg text-dark">Mua hang theo phân loại</h2>
              <Link href="/shop-with-sidebar" className="text-custom-sm text-blue">
                Xem tất cả
              </Link>
            </div>

            <ul className="flex flex-col divide-y divide-gray-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href="/shop-with-sidebar"
                    className="flex items-center justify-between py-3 text-custom-sm text-dark hover:text-blue"
                  >
                    <span>{category.name}</span>
                    <span className="text-dark-4">{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg bg-gray-1 p-4">
              <p className="font-medium text-dark mb-3">Hàng ngon vừa cập bến hôm nay</p>
              <p className="text-custom-sm text-dark-4 mb-4">
                Tiết kiệm 2% nếu mua hàng trong 24 giờ tới. Đừng bỏ lỡ!
              </p>
              <Link
                href="/shop-with-sidebar"
                className="inline-flex rounded-[5px] bg-blue px-4 py-2 text-custom-sm font-medium text-white hover:bg-blue-dark"
              >
                Mua liền đi
              </Link>
            </div>
          </aside>

          <div className="flex flex-col gap-7.5">
            <section className="bg-white rounded-lg shadow-1 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px]">
                <div className="p-6 sm:p-10 flex flex-col justify-center">
                  <span className="text-custom-sm font-medium text-blue mb-3">
                    Mùa vô học mới đã bắt đầu
                  </span>
                  <h1 className="text-dark font-semibold text-3xl sm:text-4xl xl:text-heading-2 mb-4">
                    Nguyên Store đang có ưu đãi lớn cho mùa tựu trường này!
                  </h1>
                  <p className="text-dark-4 max-w-[560px] mb-7">
                    Từ máy tính xách tay đến phụ kiện, chúng tôi có mọi thứ bạn cần để bắt đầu năm học mới với phong cách và hiệu suất. Đừng bỏ lỡ cơ hội tiết kiệm lớn này!
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {quickStats.map((item) => (
                      <span
                        key={item}
                        className="rounded-[5px] border border-gray-3 bg-gray-1 px-3 py-2 text-custom-sm text-dark"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/shop-with-sidebar"
                      className="inline-flex rounded-[5px] bg-blue px-5 py-3 font-medium text-white hover:bg-blue-dark"
                    >
                      Tiết kiệm ngay
                    </Link>
                    <Link
                      href="/cart"
                      className="inline-flex rounded-[5px] border border-gray-3 px-5 py-3 font-medium text-dark hover:border-blue hover:text-blue"
                    >
                      Xem giỏ hàng
                    </Link>
                  </div>
                </div>

                <div className="relative bg-[#eef2ff] min-h-[280px] flex items-center justify-center">
                  <Image
                    src="/images/hero/Lenovo_legion.avif"
                    alt="Sản phẩm nổi bật"
                    width={260}
                    height={320}
                    priority
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-custom-sm font-medium text-blue">
                    Sản phẩm nổi bật
                  </span>
                  <h2 className="font-semibold text-xl xl:text-heading-5 text-dark mt-1">
                    Lựa chọn phổ biến cho setup của bạn
                  </h2>
                </div>
                <Link
                  href="/shop-with-sidebar"
                  className="font-medium text-custom-sm text-blue"
                >
                  Mở rộng lựa chọn
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9">
                {featuredProducts.map((item) => (
                  <SingleGridItem item={item} key={item.id} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default Home;
