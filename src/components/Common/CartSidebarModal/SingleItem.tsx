import React from "react";
import { useCartStore } from "@/store";
import Image from "next/image";
import toast from "react-hot-toast";
import { formatVND } from "@/utils/currency";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';

const SingleItem = ({ item }) => {
  const { removeItem } = useCartStore();

  const handleRemoveFromCart = () => {
    removeItem(item.id);
    toast.success("Đã xóa khỏi giỏ hàng!");
  };

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="w-full flex items-center gap-6">
        <div className="flex items-center justify-center rounded-[10px] bg-gray-3 max-w-[90px] w-full h-22.5">
          <Image src={item.image} alt="product" width={100} height={100} />
        </div>

        <div>
          <h3 className="font-medium text-dark mb-1 ease-out duration-200 hover:text-blue">
            <a href="#"> {item.title} </a>
          </h3>
          <p className="text-custom-sm">Giá: {formatVND(item.price)}</p>
        </div>
      </div>

      <button
        onClick={handleRemoveFromCart}
        aria-label="button for remove product from cart"
        className="flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-2 border border-gray-3 text-dark ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red"
      >
        <DeleteOutlineIcon />
      </button>
    </div>
  );
};

export default SingleItem;
