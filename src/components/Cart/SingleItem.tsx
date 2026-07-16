import React, { useState } from "react";
import { useCartStore } from "@/store";
import Image from "next/image";
import toast from "react-hot-toast";
import { formatVND } from "@/utils/currency";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';

const SingleItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const { removeItem, updateQuantity } = useCartStore();

  const handleRemoveFromCart = () => {
    removeItem(item.id);
    toast.success("Đã xóa khỏi giỏ hàng!");
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(item.id, quantity - 1);
    } else {
      return;
    }
  };

  return (
    <div className="flex items-center border-t border-gray-3 py-5 px-7.5">
      <div className="min-w-[400px]">
        <div className="flex items-center justify-between gap-5">
          <div className="w-full flex items-center gap-5.5">
            <div className="flex items-center justify-center rounded-[5px] bg-gray-2 max-w-[80px] w-full h-17.5 overflow-hidden">
              {item.image ? (
                <Image width={200} height={200} src={item.image} alt="product" className="object-cover w-full h-full" />
              ) : (
                <div className="w-full h-full bg-gray-3"></div>
              )}
            </div>

            <div>
              <h3 className="text-dark ease-out duration-200 hover:text-blue">
                <a href="#"> {item.title} </a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[180px]">
        <p className="text-dark">{formatVND(item.price)}</p>
      </div>

      <div className="min-w-[275px]">
        <div className="w-max flex items-center rounded-md border border-gray-3 text-dark">
          <button
            onClick={() => handleDecreaseQuantity()}
            aria-label="button for remove product"
            className="flex items-center justify-center w-11.5 h-11.5 ease-out duration-200 hover:text-blue"
          >
            <RemoveIcon fontSize="small" />
          </button>

          <span className="flex items-center justify-center w-16 h-11.5 border-x border-gray-4">
            {quantity}
          </span>

          <button
            onClick={() => handleIncreaseQuantity()}
            aria-label="button for add product"
            className="flex items-center justify-center w-11.5 h-11.5 ease-out duration-200 hover:text-blue"
          >
            <AddIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="min-w-[200px]">
        <p className="text-dark">{formatVND(item.price * quantity)}</p>
      </div>

      <div className="min-w-[50px] flex justify-end">
        <button
          onClick={() => handleRemoveFromCart()}
          aria-label="button for remove product from cart"
          className="flex items-center justify-center rounded-lg max-w-[38px] w-full h-9.5 bg-gray-2 border border-gray-3 text-dark ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red"
        >
          <DeleteOutlineIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
