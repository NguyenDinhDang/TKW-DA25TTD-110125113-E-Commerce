import React from "react";
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
              Hỗ trợ dịch vụ
            </h2>

            <ul className="flex flex-col gap-3">
              <li className="flex gap-4.5">
                <span className="flex-shrink-0">
                  <LocationOnIcon sx={{ color: '#3C50E0', fontSize: 24 }} />
                </span>
                TVU.
              </li>

              <li>
                <a href="#" className="flex items-center gap-4.5">
                  <PhoneIcon sx={{ color: '#3C50E0', fontSize: 24 }} />
                  (+84) 1101 25113
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center gap-4.5">
                  <EmailIcon sx={{ color: '#3C50E0', fontSize: 24 }} />
                  dangdinhnguyen099@gmail.com
                </a>
              </li>
            </ul>

            {/* <!-- Social Links start --> */}
            <div className="flex items-center gap-4 mt-7.5">
              <a
                href="#"
                aria-label="Facebook Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <FacebookIcon fontSize="small" />
              </a>

              <a
                href="#"
                aria-label="Twitter Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <TwitterIcon fontSize="small" />
              </a>

              <a
                href="#"
                aria-label="Instagram Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <InstagramIcon fontSize="small" />
              </a>

              <a
                href="#"
                aria-label="Linkedin Social Link"
                className="flex ease-out duration-200 hover:text-blue"
              >
                <LinkedInIcon fontSize="small" />
              </a>
            </div>
            {/* <!-- Social Links end --> */}
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
              Tài khoản
            </h2>

            <ul className="flex flex-col gap-3.5">
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Tài khoản của tôi
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Đăng nhập/ Đăng ký
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Giỏ hàng
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Danh sách yêu thích
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Cửa hàng
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
              Chính sách
            </h2>

            <ul className="flex flex-col gap-3">
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Chính sách hoàn tiền
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Phản hồi
                </a>
              </li>
              <li>
                <a className="ease-out duration-200 hover:text-blue" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-custom-1 font-medium text-dark lg:text-right">
              Tải ứng dụng
            </h2>

            <p className="lg:text-right text-custom-sm mb-4">
              Giảm 30% cho lần mua hàng đầu tiên của bạn
            </p>

            <ul className="flex flex-col lg:items-end gap-3">
              <li>
                <a
                  className="inline-flex items-center gap-3 py-[9px] pl-4 pr-7.5 text-white rounded-md bg-dark ease-out duration-200 hover:bg-opacity-95"
                  href="#"
                >
                  <AppleIcon fontSize="large" />

                  <div>
                    <span className="block text-custom-xs">
                      Tải tại
                    </span>
                    <p className="font-medium">App Store</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  className="inline-flex items-center gap-3 py-[9px] pl-4 pr-8.5 text-white rounded-md bg-blue ease-out duration-200 hover:bg-opacity-95"
                  href="#"
                >
                  <ShopIcon fontSize="large" />

                  <div>
                    <span className="block text-custom-xs"> Tải tại</span>
                    <p className="font-medium">Google Play</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      {/* <!-- footer bottom start --> */}
      <div className="py-5 xl:py-7.5 bg-gray-1">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="text-dark font-medium">
              &copy; {year}. All rights reserved by Đặng Đình Nguyên and Thái Minh Tân
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <p className="font-medium">Có thể thanh toán bằng:</p>
              {/* Phần thanh toán */}
              <div className="flex flex-wrap items-center gap-6">
                <a href="#" aria-label="payment system with visa card">
                  <Image
                    src="/images/payment/payment-01.svg"
                    alt="visa card"
                    width={66}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="payment system with paypal">
                  <Image
                    src="/images/payment/payment-02.svg"
                    alt="paypal"
                    width={18}
                    height={21}
                  />
                </a>
                <a href="#" aria-label="payment system with master card">
                  <Image
                    src="/images/payment/payment-03.svg"
                    alt="master card"
                    width={33}
                    height={24}
                  />
                </a>
                <a href="#" aria-label="payment system with apple pay">
                  <Image
                    src="/images/payment/payment-04.svg"
                    alt="apple pay"
                    width={52.94}
                    height={22}
                  />
                </a>
                <a href="#" aria-label="payment system with google pay">
                  <Image
                    src="/images/payment/payment-05.svg"
                    alt="google pay"
                    width={56}
                    height={22}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
