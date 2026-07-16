import React from "react";
import { useCartStore, useWishlistStore } from "@/store";

import Image from "next/image";
import toast from "react-hot-toast";
import { formatVND } from "@/utils/currency";
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlined';

const SingleItem = ({ item }) => {
  const { removeItem } = useWishlistStore();
  const { addItem } = useCartStore();

  const handleRemoveFromWishlist = () => {
    removeItem(item.id);
    toast.success("Đã xóa khỏi yêu thích!");
  };

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    toast.success("Đã thêm vào giỏ hàng!");
  };

  return (
    <div className="flex items-center border-t border-gray-3 py-5 px-10">
      <div className="min-w-[83px]">
        <button
          onClick={() => handleRemoveFromWishlist()}
          aria-label="button for remove product from wishlist"
          className="flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-2 border border-gray-3 ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red"
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>

      <div className="min-w-[387px]">
        <div className="flex items-center justify-between gap-5">
          <div className="w-full flex items-center gap-5.5">
            <div className="flex items-center justify-center rounded-[5px] bg-gray-2 max-w-[80px] w-full h-17.5">
              <Image src={item.image} alt="product" width={200} height={200} />
            </div>

            <div>
              <h3 className="text-dark ease-out duration-200 hover:text-blue">
                <a href="#"> {item.title} </a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[205px]">
        <p className="text-dark">{formatVND(item.price)}</p>
      </div>

      <div className="min-w-[265px]">
        <div className="flex items-center gap-1.5">
          <ErrorOutlineIcon sx={{ color: '#F23030' }} />

          <span className="text-red"> Hết hàng </span>
        </div>
      </div>

      <div className="min-w-[150px] flex justify-end">
        <button
          onClick={() => handleAddToCart()}
          className="inline-flex text-dark hover:text-white bg-gray-1 border border-gray-3 py-2.5 px-6 rounded-md ease-out duration-200 hover:bg-blue hover:border-gray-3"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
