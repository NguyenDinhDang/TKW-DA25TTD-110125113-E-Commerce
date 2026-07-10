import React from "react";
import { useAuthModalStore } from "@/store/authModalStore";

const Signin = () => {
  const { switchView } = useAuthModalStore();

  return (
    <>
      <div className="text-center mb-5 mt-1">
        <h2 className="font-semibold text-2xl text-dark mb-1">
          Đăng nhập tài khoản
        </h2>
        <p className="text-dark-4 text-sm">Nhập thông tin đăng nhập của bạn bên dưới</p>
      </div>

      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block mb-1.5 text-dark text-sm">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Nhập email của bạn"
            className="w-full rounded-lg border border-gray-3 bg-gray-1 py-2.5 px-4 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1.5 text-dark text-sm">Mật khẩu</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Nhập mật khẩu của bạn"
            autoComplete="on"
            className="w-full rounded-lg border border-gray-3 bg-gray-1 py-2.5 px-4 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>

        <button
          type="submit"
          className="w-full font-medium text-white bg-dark py-2.5 rounded-lg hover:bg-blue duration-200 mt-1"
        >
          Đăng nhập
        </button>

        <a href="#" className="block text-center text-dark-4 text-sm hover:text-dark duration-200">
          Quên mật khẩu?
        </a>

        <div className="relative flex items-center justify-center my-1">
          <span className="absolute w-full h-px bg-gray-3"></span>
          <span className="relative z-10 px-3 bg-white text-dark-4 text-xs font-medium">Hoặc</span>
        </div>

        <button type="button" className="flex justify-center items-center gap-2 rounded-lg border border-gray-3 bg-gray-1 py-2.5 hover:bg-gray-2 duration-200">
          <img src="/images/logo/google.png" alt="Google" className="w-5 h-5" />
          Đăng nhập với Google
        </button>

        <button type="button" className="flex justify-center items-center gap-2 rounded-lg border border-gray-3 bg-gray-1 py-2.5 hover:bg-gray-2 duration-200">
          <img src="/images/logo/github.png" alt="Github" className="w-5 h-5" />
          Đăng nhập với Github
        </button>

        <p className="text-center mt-2 text-sm">
          Chưa có tài khoản?
          <button 
            type="button" 
            onClick={() => switchView('signup')} 
            className="text-dark hover:text-blue ml-1 font-medium duration-200 bg-transparent border-none cursor-pointer"
          >
            Đăng ký ngay!
          </button>
        </p>
      </form>
    </>
  );
};

export default Signin;
