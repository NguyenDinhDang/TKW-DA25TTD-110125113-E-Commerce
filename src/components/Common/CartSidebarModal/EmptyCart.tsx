import React from "react";
import Link from "next/link";
import { useCartSidebarModal } from "@/store";
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

const EmptyCart = () => {
  const { closeModal: closeCartModal } = useCartSidebarModal();

  return (
    <div className="text-center">
      <div className="mx-auto pb-7.5 flex justify-center items-center">
        <div className="w-[100px] h-[100px] bg-gray-2 rounded-full flex items-center justify-center">
          <RemoveShoppingCartOutlinedIcon sx={{ fontSize: 50, color: '#8D93A5' }} />
        </div>
      </div>

      <p className="pb-6">Giỏ hàng đang trống!</p>

      <Link
        onClick={() => closeCartModal()}
        href="/shop-with-sidebar"
        className="w-full lg:w-10/12 mx-auto flex justify-center font-medium text-white bg-dark py-[13px] px-6 rounded-md ease-out duration-200 hover:bg-opacity-95"
      >
        Tiếp tục mua hàng
      </Link>
    </div>
  );
};

export default EmptyCart;
