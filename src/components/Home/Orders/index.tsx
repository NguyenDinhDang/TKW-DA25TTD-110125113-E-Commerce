import React, { useState } from "react";
import ordersData from "./ordersData";
import CloseIcon from "@mui/icons-material/Close";

const Orders = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const openEditModal = (order: any) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const openViewModal = (order: any) => {
    setSelectedOrder(order);
    setIsViewModalOpen(true);
  };

  const closeModals = () => {
    setIsEditModalOpen(false);
    setIsViewModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[770px]">
          {/* <!-- order item --> */}
          {ordersData.length > 0 && (
            <>
              <div className="items-center justify-between py-4.5 px-7.5 hidden md:flex ">
                <div className="min-w-[111px]">
                  <p className="text-custom-sm text-dark">Đơn hàng</p>
                </div>
                <div className="min-w-[175px]">
                  <p className="text-custom-sm text-dark">Ngày</p>
                </div>

                <div className="min-w-[128px]">
                  <p className="text-custom-sm text-dark">Trạng thái</p>
                </div>

                <div className="min-w-[213px]">
                  <p className="text-custom-sm text-dark">Sản phẩm</p>
                </div>

                <div className="min-w-[113px]">
                  <p className="text-custom-sm text-dark">Tổng cộng</p>
                </div>

                <div className="min-w-[113px]">
                  <p className="text-custom-sm text-dark">Thao tác</p>
                </div>
              </div>

              {/* Đạo hữu xin nương tay, trận pháp render danh sách và phân loại trạng thái này đang vận hành ổn định, chớ dại mà đụng vào kẻo tẩu hỏa nhập ma */}
              {ordersData.map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4.5 px-7.5 border-t border-gray-3"
                >
                  <div className="min-w-[111px]">
                    <p className="text-custom-sm text-dark font-medium">#{order.orderId}</p>
                  </div>
                  <div className="min-w-[175px]">
                    <p className="text-custom-sm text-dark">{order.createdAt}</p>
                  </div>
                  <div className="min-w-[128px]">
                    <span
                      className={`inline-block py-0.5 px-2.5 rounded-[30px] capitalize text-custom-sm ${
                        order.status === "delivered"
                          ? "text-green bg-green-light-6"
                          : order.status === "on-hold"
                          ? "text-red bg-red-light-6"
                          : order.status === "processing"
                          ? "text-yellow bg-yellow-light-4"
                          : "text-dark bg-gray-3"
                      }`}
                    >
                      {order.status === "delivered"
                        ? "Đã giao"
                        : order.status === "on-hold"
                        ? "Tạm giữ"
                        : order.status === "processing"
                        ? "Đang xử lý"
                        : "Khác"}
                    </span>
                  </div>
                  <div className="min-w-[213px]">
                    <p className="text-custom-sm text-dark truncate max-w-[200px]">{order.title}</p>
                  </div>
                  <div className="min-w-[113px]">
                    <p className="text-custom-sm text-dark">${order.total}</p>
                  </div>
                  <div className="min-w-[113px] flex gap-3">
                    <button
                      onClick={() => openViewModal(order)}
                      className="text-custom-sm text-blue hover:underline"
                    >
                      Xem
                    </button>
                    <button
                      onClick={() => openEditModal(order)}
                      className="text-custom-sm text-blue hover:underline"
                    >
                      Sửa
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
          {ordersData.length === 0 ? (
            <p className="py-9.5 px-4 sm:px-7.5 xl:px-10">
              Bạn chưa có đơn hàng nào!
            </p>
          ) : null}
        </div>
      </div>

      {(isEditModalOpen || isViewModalOpen) && (
        <div className="fixed top-0 left-0 z-[99999] flex items-center justify-center w-full h-screen bg-dark/70 sm:px-8 px-4 py-5">
          <div className="w-full max-w-[600px] rounded-xl shadow-3 bg-white pt-7.5 relative pb-5">
            <button
              onClick={closeModals}
              aria-label="close modal"
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-gray-1 text-dark hover:bg-gray-2 ease-in duration-150"
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
