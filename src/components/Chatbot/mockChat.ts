import shopData from "../Shop/shopData";

export const DEFAULT_REPLY = "Xin lỗi, tôi chưa hiểu ý bạn. Bạn có thể diễn đạt lại hoặc chọn 1 trong các gợi ý bên dưới không?";
export const QUICK_SUGGESTIONS = ["Xin chào", "Bảng giá sản phẩm", "Liên hệ hỗ trợ"];

function buildProductTable() {
  var table = "STT | Tên sản phẩm | Danh mục | Giá gốc | Giá KM\n";
  table = table + "-----------------------------------------------------\n";

  for (var i = 0; i < shopData.length; i++) {
    var product = shopData[i];
    var line = (i + 1) + ". " + product.title
      + " | " + product.category
      + " | $" + product.price
      + " | $" + product.discountedPrice
      + "\n";
    table = table + line;
  }

  return table;
}

export function getBotReply(userInput) {

  if (userInput === "Xin chào") {
    return "Xin chào! Tôi có thể giúp gì cho bạn?";
  }

  if (userInput === "Bảng giá sản phẩm") {
    return buildProductTable();
  }

  if (userInput === "Liên hệ hỗ trợ") {
    return "Bạn có thể liên hệ hotline 6767-3636 hoặc email lo-vuong@gmail.wag để được hỗ trợ.";
  }

  if (userInput === "Cảm ơn") {
    return "Không có gì, rất vui được hỗ trợ bạn!";
  }

  if (userInput === "Tạm biệt") {
    return "Tạm biệt! Hẹn gặp lại bạn lần sau.";
  }

  return DEFAULT_REPLY;
}