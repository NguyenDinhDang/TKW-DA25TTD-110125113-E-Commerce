"use client";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { useCartStore, usePreviewSliderStore, useQuickViewStore } from "@/store";
import Image from "next/image";
import toast from "react-hot-toast";
import { formatVND } from "@/utils/currency";

const QuickViewModal = () => {
  const [quantity, setQuantity] = useState(1);

  const { isOpen, closeQuickView, product } = useQuickViewStore();
  const { openPreviewModal } = usePreviewSliderStore();
  const { addItem } = useCartStore();

  const [activePreview, setActivePreview] = useState(0);

  // add to cart
  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
    });

    toast.success("Đã thêm vào giỏ hàng!");
    closeQuickView();
  };

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closeQuickView();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);

      setQuantity(1);
    };
  }, [isOpen, closeQuickView]);

  return (
    <div
      className={`${isOpen ? "z-99999" : "hidden"
        } fixed top-0 left-0 overflow-y-auto no-scrollbar w-full h-screen sm:py-20 xl:py-25 2xl:py-[230px] bg-dark/70 sm:px-8 px-4 py-5`}
    >
      <div className="flex items-center justify-center ">
        <div className="w-full max-w-[1100px] rounded-xl shadow-3 bg-white p-7.5 relative modal-content">
          <button
            onClick={() => closeQuickView()}
            aria-label="button for close modal"
            className="absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 bg-meta text-body hover:text-dark"
          >
            <CloseIcon sx={{ fontSize: 26 }} />
          </button>

          <div className="flex flex-wrap items-center gap-12.5">
            <div className="max-w-[526px] w-full">
              <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                  {/* Single image preview for now */}
                  {product && (
                    <button
                      onClick={() => setActivePreview(0)}
                      className={`flex items-center justify-center w-20 h-20 overflow-hidden rounded-lg bg-gray-1 ease-out duration-200 hover:border-2 hover:border-blue ${
                        activePreview === 0 && "border-2 border-blue"
                      }`}
                    >
                      <Image
                        src={product.image}
                        alt="thumbnail"
                        width={61}
                        height={61}
                        className="aspect-square"
                      />
                    </button>
                  )}
                </div>

                <div className="relative z-1 overflow-hidden flex items-center justify-center w-full sm:min-h-[508px] bg-gray-1 rounded-lg border border-gray-3">
                  <div>
                    <button
                      onClick={openPreviewModal}
                      aria-label="button for zoom"
                      className="gallery__Image w-10 h-10 rounded-[5px] bg-white shadow-1 flex items-center justify-center ease-out duration-200 text-dark hover:text-blue absolute top-4 lg:top-8 right-4 lg:right-8 z-50"
                    >
                      <ZoomInMapIcon sx={{ fontSize: 22 }} />
                    </button>

                    {product && (
                      <Image
                        src={product.image}
                        alt="products-details"
                        width={400}
                        height={400}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[445px] w-full">
              <span className="inline-block text-custom-xs font-medium text-white py-1 px-3 bg-green mb-6.5">
                GIẢM 20%
              </span>

              <h3 className="font-semibold text-xl xl:text-heading-5 text-dark mb-4">
                {product?.title || "Sản phẩm"}
              </h3>

              <div className="flex flex-wrap items-center gap-5 mb-6">
                <div className="flex items-center gap-1.5">
                  {/* <!-- stars --> */}
                  <div className="flex items-center gap-1">
                    <StarIcon sx={{ color: '#FFA645', fontSize: 18 }} />
                    <StarIcon sx={{ color: '#FFA645', fontSize: 18 }} />
                    <StarIcon sx={{ color: '#FFA645', fontSize: 18 }} />
                    <StarIcon className="text-gray-4" sx={{ fontSize: 18 }} />
                    <StarIcon className="text-gray-4" sx={{ fontSize: 18 }} />
                  </div>

                  <span>
                    <span className="font-medium text-dark"> Đánh giá 4.7 </span>
                    <span className="text-dark-2"> (5 đánh giá) </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircleIcon sx={{ color: '#22AD5C', fontSize: 20 }} />

                  <span className="font-medium text-dark"> Còn hàng </span>
                </div>
              </div>

              <p className="text-body text-custom-sm mb-6">
                {product?.description || "Mô tả sản phẩm đang được cập nhật."}
              </p>

              <div className="flex flex-wrap justify-between gap-5 mt-6 mb-7.5">
                <div>
                  <h4 className="font-semibold text-lg text-dark mb-3.5">
                    Giá
                  </h4>

                  <span className="flex items-center gap-2">
                    <span className="font-semibold text-dark text-xl xl:text-heading-4">
                      {formatVND(product?.price || 0)}
                    </span>
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-dark mb-3.5">
                    Số lượng
                  </h4>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      aria-label="button for remove product"
                      className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-dark ease-out duration-200 hover:text-blue"
                      disabled={quantity < 0 && true}
                    >
                      <RemoveIcon fontSize="small" />
                    </button>

                    <span
                      className="flex items-center justify-center w-20 h-10 rounded-[5px] border border-gray-4 bg-white font-medium text-dark"
                      x-text="quantity"
                    >
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="button for add product"
                      className="flex items-center justify-center w-10 h-10 rounded-[5px] bg-gray-2 text-dark ease-out duration-200 hover:text-blue"
                    >
                      <AddIcon fontSize="small" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  disabled={quantity === 0 && true}
                  onClick={() => handleAddToCart()}
                  className={`inline-flex font-medium text-white bg-blue py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark
                  `}
                >
                  Thêm vào giỏ
                </button>

                <button
                  className={`inline-flex items-center gap-2 font-medium text-white bg-dark py-3 px-6 rounded-md ease-out duration-200 hover:bg-opacity-95 `}
                >
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                  Thêm vào yêu thích
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
