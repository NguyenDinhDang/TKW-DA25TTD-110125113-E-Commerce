"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { usePreviewSliderStore, useQuickViewStore } from "@/store";

// Component Modal dùng để hiển thị slider (dạng popup) cho phép người dùng xem nhanh ảnh sản phẩm
const PreviewSliderModal = () => {
  const { closePreviewModal, isOpen } = usePreviewSliderStore();
  const product = useQuickViewStore((state) => state.product);

  const sliderRef = useRef<any>(null);

  // Đạo hữu xin nương tay, trận pháp này đang vận hành ổn định, chớ dại mà đụng vào kẻo tẩu hỏa nhập ma
  // Chuyển slide bằng cách truy cập trực tiếp vào đối tượng swiper thông qua ref
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div
      className={`preview-slider w-full h-screen  z-[999999] inset-0 flex justify-center items-center bg-[#000000F2] bg-opacity-70 ${isOpen ? "fixed" : "hidden"
        }`}
    >
      <button
        onClick={() => closePreviewModal()}
        aria-label="button for close modal"
        className="absolute top-0 right-0 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full ease-in duration-150 text-white hover:text-meta-5 z-10"
      >
        <CloseIcon sx={{ fontSize: 36, color: 'white' }} />
      </button>

      <div>
        <button
          className="absolute left-100 p-5 cursor-pointer z-10"
          onClick={handlePrev}
        >
          <ArrowBackIcon sx={{ fontSize: 36, color: 'white' }} />
        </button>

        <button
          className="absolute right-100 p-5 cursor-pointer z-10"
          onClick={handleNext}
        >
          <ArrowForwardIcon sx={{ fontSize: 36, color: 'white' }} />
        </button>
      </div>

      <Swiper ref={sliderRef} slidesPerView={1} spaceBetween={20}>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/products/product-2-bg-1.png"}
              alt={"product image"}
              width={450}
              height={450}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/products/product-2-bg-1.png"}
              alt={"product image"}
              width={450}
              height={450}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PreviewSliderModal;
