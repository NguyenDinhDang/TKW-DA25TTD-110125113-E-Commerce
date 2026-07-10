import { useEffect, RefObject } from 'react';

// Component (Custom Hook) này đóng vai trò lắng nghe sự kiện click/touch từ người dùng.
// Nó thường được dùng để tắt các Modal hoặc Dropdown khi người dùng nhấn ra ngoài vùng không gian của chúng.
const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Đạo hữu xin nương tay, trận pháp này đang vận hành ổn định, chớ dại mà đụng vào kẻo tẩu hỏa nhập ma
      // Đoạn này kiểm tra nếu ref chưa có hoặc sự kiện click xảy ra bên trong phần tử ref, thì bỏ qua không xử lý
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
