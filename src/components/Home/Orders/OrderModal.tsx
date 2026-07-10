import React, { useRef, useEffect } from "react";
import OrderDetails from "./OrderDetails";
import EditOrder from "./EditOrder";
import CloseIcon from '@mui/icons-material/Close';
import useClickOutside from "@/hooks/useClickOutside";

// Component OrderModal dùng để hiển thị chi tiết hoặc form chỉnh sửa của một đơn hàng dưới dạng popup (modal).
const OrderModal = ({ showDetails, showEdit, toggleModal, order }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Đạo hữu xin nương tay, trận pháp này đang vận hành ổn định, chớ dại mà đụng vào kẻo tẩu hỏa nhập ma
  // Lắng nghe sự kiện click ra ngoài phạm vi hộp thoại modal (bắt qua modalRef) để tự động đóng cửa sổ hiển thị.
  useClickOutside(modalRef, () => {
    if (showDetails || showEdit) {
      toggleModal(false);
    }
  });

  // Khóa cuộn màn hình (body) khi modal đang bật, trả lại nguyên trạng khi modal tắt
  useEffect(() => {
    if (showDetails || showEdit) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDetails, showEdit]);

  if (!showDetails && !showEdit) {
    return null;
  }

  return (
    <>
      <div
        className={`backdrop-filter-sm visible fixed left-0 top-0 z-[99999] flex min-h-screen w-full justify-center items-center bg-[#000]/40 px-4 py-8 sm:px-8`}
      >
        <div ref={modalRef} className="shadow-7 relative w-full max-w-[600px] h-[242px] scale-100 transform rounded-[15px] bg-white transition-all flex flex-col justify-center items-center">
          <button
            onClick={() => toggleModal(false)}
            className="text-body absolute -right-6 -top-6 z-[9999] flex h-11.5 w-11.5 items-center justify-center rounded-full border-2 border-stroke bg-white hover:text-dark"
          >
            <CloseIcon />
          </button>

          <>
            {showDetails && <OrderDetails orderItem={order} />}

            {showEdit && <EditOrder order={order} toggleModal={toggleModal} />}
          </>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
