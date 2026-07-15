import React from "react";

const OrderDetails = ({ orderItem }: any) => {
  return (
    <div className="w-full px-4 sm:px-7.5 pb-4 max-h-[80vh] overflow-y-auto">
      <h3 className="text-xl font-medium text-dark mb-4">Chi tiết đơn hàng</h3>
      <div className="flex flex-col gap-3 text-custom-sm text-dark">
        <div className="flex items-center justify-between">
          <span className="font-medium">Đơn hàng:</span>
          <span className="text-red">#{orderItem?.orderId?.slice(-8) || "N/A"}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Ngày:</span>
          <span>{orderItem?.createdAt}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Trạng thái:</span>
          <span
            className={`inline-block py-0.5 px-2.5 rounded-[30px] capitalize ${
              orderItem?.status === "delivered"
                ? "text-green bg-green-light-6"
                : orderItem?.status === "on-hold"
                ? "text-red bg-red-light-6"
                : orderItem?.status === "processing"
                ? "text-yellow bg-yellow-light-4"
                : "Unknown Status"
            }`}
          >
            {orderItem?.status === "delivered"
              ? "Đã giao"
              : orderItem?.status === "on-hold"
              ? "Tạm giữ"
              : orderItem?.status === "processing"
              ? "Đang xử lý"
              : "Không rõ trạng thái"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Sản phẩm:</span>
          <span className="text-right max-w-[200px] truncate">{orderItem?.title}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Tổng cộng:</span>
          <span>${orderItem?.total}</span>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-3">
        <p className="font-medium text-dark mb-2">Địa chỉ giao hàng:</p>
        <p className="text-custom-sm text-dark-4">Hello world!</p>
      </div>
    </div>
  );
};

export default OrderDetails;
