import React from "react";
import { useAuthModalStore } from "@/store/authModalStore";

const Signup = () => {
  const { switchView } = useAuthModalStore();

  return (
    <>
      <div className="text-center mb-5 mt-1">
        <h2 className="font-semibold text-2xl text-dark mb-1">Tạo tài khoản mới</h2>
        <p className="text-dark-4 text-sm">Nhập thông tin chi tiết của bạn bên dưới</p>
      </div>

      <form className="flex flex-col gap-4">
        <button type="button" className="flex justify-center items-center gap-2 rounded-lg border border-gray-3 bg-gray-1 py-2.5 hover:bg-gray-2 duration-200">
          <img src="/images/logo/google.png" alt="Google" className="w-5 h-5" />
          Đăng ký với Google
        </button>

        <button type="button" className="flex justify-center items-center gap-2 rounded-lg border border-gray-3 bg-gray-1 py-2.5 hover:bg-gray-2 duration-200">
          <img src="/images/logo/github.png" alt="Github" className="w-5 h-5" />
          Đăng ký với Github
        </button>

        <div className="relative flex items-center justify-center my-1">
          <span className="absolute w-full h-px bg-gray-3"></span>
          <span className="relative z-10 px-3 bg-white text-dark-4 text-xs font-medium">Hoặc</span>
        </div>

        <div>
          <label htmlFor="name" className="block mb-1.5 text-dark text-sm">Họ và tên <span className="text-red">*</span></label>
          <input type="text" name="name" id="name" placeholder="Nhập họ và tên" className="w-full rounded-lg border border-gray-3 bg-gray-1 py-2.5 px-4 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1.5 text-dark text-sm">Địa chỉ Email <span className="text-red">*</span></label>
          <input type="email" name="email" id="email" placeholder="Nhập địa chỉ email" className="w-full rounded-lg border border-gray-3 bg-gray-1 py-2.5 px-4 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20" />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1.5 text-dark text-sm">Mật khẩu <span className="text-red">*</span></label>
          <input type="password" name="password" id="password" placeholder="Nhập mật khẩu" autoComplete="on" className="w-full rounded-lg border border-gray-3 bg-gray-1 py-2.5 px-4 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20" />
        </div>

        <div>
          <label htmlFor="re-type-password" className="block mb-1.5 text-dark text-sm">Nhập lại mật khẩu <span className="text-red">*</span></label>
          <input type="password" name="re-type-password" id="re-type-password" placeholder="Nhập lại mật khẩu" autoComplete="on" className="w-full rounded-lg border border-gray-3 bg-gray-1 py-2.5 px-4 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20" />
        </div>

        <button type="submit" className="w-full font-medium text-white bg-dark py-2.5 rounded-lg hover:bg-blue duration-200 mt-1">
          Tạo tài khoản
        </button>

        <p className="text-center mt-1 text-sm">
          Đã có tài khoản?
          <button 
            type="button" 
            onClick={() => switchView('signin')} 
            className="text-dark hover:text-blue ml-1 font-medium duration-200 bg-transparent border-none cursor-pointer"
          >
            Đăng nhập ngay!
          </button>
        </p>
      </form>
    </>
  );
};

export default Signup;
