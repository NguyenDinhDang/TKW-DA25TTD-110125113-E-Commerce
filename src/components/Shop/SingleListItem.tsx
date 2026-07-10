"use client";
import React from "react";

import { Product } from "@/types/product";
import { useCartStore, useQuickViewStore, useWishlistStore } from "@/store";
import Link from "next/link";
import Image from "next/image";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import toast from "react-hot-toast";
import { formatVND } from "@/utils/currency";

const SingleListItem = ({ item }: { item: Product }) => {
  const { addItem } = useCartStore();
  const { openQuickView } = useQuickViewStore();
  const { addItem: addToWishlist } = useWishlistStore();

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    openQuickView({
      id: String(item.id),
      title: item.title,
      price: item.price,
      image: item.imgs.previews[0],
      description: item.description,
      rating: item.rating,
      reviews: item.reviews,
      category: item.category,
    });
  };

  // add to cart
  const handleAddToCart = () => {
    addItem({
      id: String(item.id),
      title: item.title,
      price: item.discountedPrice || item.price,
      image: item.imgs.previews[0],
      quantity: 1,
    });
    toast.success("Đã thêm vào giỏ hàng!");
  };

  const handleItemToWishList = () => {
    addToWishlist({
      id: String(item.id),
      title: item.title,
      price: item.discountedPrice || item.price,
      image: item.imgs.previews[0],
      category: item.category,
    });
    toast.success("Đã thêm vào yêu thích!");
  };

  return (
    <div className="group rounded-lg bg-white shadow-1">
      <div className="flex">
        <div className="shadow-list relative overflow-hidden flex items-center justify-center max-w-[270px] w-full sm:min-h-[270px] p-4">
          <Image src={item.imgs.previews[0]} alt="" width={250} height={250} />

          <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
          <button
            onClick={() => {
              handleQuickViewUpdate();
            }}
              aria-label="button for quick view"
              className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
            >
              <VisibilityOutlinedIcon fontSize="small" />
            </button>

            <button
              onClick={() => handleAddToCart()}
              className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-blue text-white ease-out duration-200 hover:bg-blue-dark"
            >
              Thêm vào giỏ
            </button>

            <button
              onClick={() => handleItemToWishList()}
              aria-label="button for favorite select"
              className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
            >
              <FavoriteBorderIcon fontSize="small" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 sm:flex-row sm:items-center justify-center sm:justify-between py-5 px-4 sm:px-7.5 lg:pl-11 lg:pr-12">
          <div>
            <h3 className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5">
              <Link href="/shop-details"> {item.title} </Link>
            </h3>

            <span className="flex items-center gap-2 font-medium text-lg">
              <span className="text-dark">{formatVND(item.discountedPrice)}</span>
              <span className="text-dark-4 line-through">{formatVND(item.price)}</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} sx={{ color: '#FFB800', fontSize: 15 }} />
              ))}
            </div>

            <p className="text-custom-sm">({item.reviews})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListItem;
