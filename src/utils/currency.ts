export const USD_TO_VND_RATE = 26364.99;

export const formatVND = (usdAmount: number) => {
  const vndAmount = usdAmount * USD_TO_VND_RATE;

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(vndAmount);
};
