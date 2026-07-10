"use client";
import React from "react";
import Discount from "./Discount";
import OrderSummary from "./OrderSummary";
import { useCartStore } from "@/store";
import SingleItem from "./SingleItem";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

const Cart = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <>
      {/* <!-- ===== Breadcrumb Section Start ===== --> */}
      <section>
        <Breadcrumb title={"Giỏ hàng"} pages={["Cart"]} />
      </section>
      {/* <!-- ===== Breadcrumb Section End ===== --> */}
      {cartItems.length > 0 ? (
        <section className="overflow-hidden py-20 bg-gray-2">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
            <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
              <h2 className="font-medium text-dark text-2xl">Giỏ hàng của bạn</h2>
              <button className="text-blue">Xóa giỏ hàng</button>
            </div>

            <div className="bg-white rounded-[10px] shadow-1">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[1170px]">
                  {/* <!-- table header --> */}
                  <div className="flex items-center py-5.5 px-7.5">
                    <div className="min-w-[400px]">
                      <p className="text-dark">Sản phẩm</p>
                    </div>

                    <div className="min-w-[180px]">
                      <p className="text-dark">Giá</p>
                    </div>

                    <div className="min-w-[275px]">
                      <p className="text-dark">Số lượng</p>
                    </div>

                    <div className="min-w-[200px]">
                      <p className="text-dark">Tạm tính</p>
                    </div>

                    <div className="min-w-[50px]">
                      <p className="text-dark text-right">Thao tác</p>
                    </div>
                  </div>

                  {/* <!-- cart item --> */}
                  {cartItems.length > 0 &&
                    cartItems.map((item, key) => (
                      <SingleItem item={item} key={key} />
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11 mt-9">
              <Discount />
              <OrderSummary />
            </div>
          </div>
        </section>
      ) : (
        <>
          <div className="text-center mt-8">
            <div className="mx-auto pb-7.5 flex justify-center items-center">
              <div className="w-[100px] h-[100px] bg-gray-2 rounded-full flex items-center justify-center">
                <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 50, color: '#8D93A5' }} />
              </div>
            </div>

            <p className="pb-6">Giỏ hàng đang trống!</p>

            <Link
              href="/shop-with-sidebar"
              className="w-96 mx-auto flex justify-center font-medium text-white bg-dark py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-opacity-95"
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
