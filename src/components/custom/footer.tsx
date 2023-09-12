import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TiLocation } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="relative z-10 pt-10 lg:pt-10 border-t">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-4/12">
              <div className="mb-8 max-w-[310px]">
                <a
                  href="index.html"
                  className="mb-8 inline-flex items-center gap-1 text-2xl font-bold"
                >
                  <img
                    src="/logo.jpeg"
                    alt="logo"
                    className="max-w-24 w-24 rounded-full"
                  />
                  Company
                </a>
                <p className="mb-2 flex items-center text-xl font-bold">
                  <TiLocation /> Our Locations
                </p>

                <p className="mb-4 flex text-sm font-light">
                  <span className="pr-3"> 01. </span>
                  29 Holles Place, Dublin 2 D02 YY46
                </p>
                <p className="flex text-sm font-light">
                  <span className="pr-3"> 02. </span>
                  68 Jay Street, Suite 902 New Side Brooklyn, NY 11201
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
              <div className="mb-16">
                <h3 className="pb-2 text-md font-medium">Top Categories</h3>
                <span className="mb-5 block h-[1px] w-10 rounded bg-gray-500"></span>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Washing Machines
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Air Conditioners
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Gamming Laptops
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-16">
                <h3 className="pb-2 text-md font-semibold ">Important Links</h3>
                <span className="mb-5 block h-[1px] w-10 rounded bg-gray-500"></span>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Latest Posts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="hover:underline text-sm font-light transition-all hover:text-white"
                    >
                      Order Track
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-5/12 xl:w-4/12">
              <div className="mb-16">
                <h3 className="pb-2 text-md font-semibold">Newsletter</h3>
                <span className="mb-5 block h-[1px] w-10 rounded bg-gray-500"></span>

                <div>
                  <p className="mb-8 text-sm font-light">
                    Enter your email to receive our latest updates about our
                    products.
                  </p>
                  <form className="flex pr-10">
                    <Input
                      placeholder="Email address"
                      className="h-12 rounded-none rounded-l-md"
                    />
                    <Button className="h-12 rounded-none rounded-r-md">
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 bottom-0 -z-10">
            <svg
              width="138"
              height="220"
              viewBox="0 0 138 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="-2.5"
                cy="140.5"
                rx="140.5"
                ry="140.5"
                transform="rotate(180 -2.5 140.5)"
                fill="url(#paint0_linear_2089_516)"
              ></ellipse>
              <defs>
                <linearGradient
                  id="paint0_linear_2089_516"
                  x1="-2.5"
                  y1="-1.52588e-05"
                  x2="-2.5"
                  y2="281"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.22"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span className="absolute top-5 right-5 -z-10">
            <svg
              width="53"
              height="69"
              viewBox="0 0 53 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.88244 32.7854C2.92209 32.7854 3.76488 33.6194 3.76488 34.6483C3.76488 35.6771 2.92209 36.5111 1.88244 36.5111C0.84279 36.5111 4.54444e-08 35.6771 0 34.6483C-4.54444e-08 33.6194 0.84279 32.7854 1.88244 32.7854Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M1.88244 16.3932C2.92209 16.3932 3.76488 17.2272 3.76488 18.256C3.76488 19.2849 2.92209 20.1189 1.88244 20.1189C0.84279 20.1189 4.54444e-08 19.2849 0 18.256C-4.54444e-08 17.2272 0.84279 16.3932 1.88244 16.3932Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M1.88244 0.000350049C2.92209 0.000350004 3.76488 0.834362 3.76488 1.86317C3.76488 2.89199 2.92209 3.726 1.88244 3.726C0.84279 3.726 4.54444e-08 2.89199 0 1.86317C-4.54444e-08 0.834362 0.84279 0.000350094 1.88244 0.000350049Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M17.9867 32.7861C19.0263 32.7861 19.8691 33.6201 19.8691 34.6489C19.8691 35.6777 19.0263 36.5118 17.9867 36.5118C16.947 36.5118 16.1042 35.6777 16.1042 34.6489C16.1042 33.6201 16.947 32.7861 17.9867 32.7861Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M34.5522 32.7861C35.5918 32.7861 36.4346 33.6201 36.4346 34.6489C36.4346 35.6777 35.5918 36.5118 34.5522 36.5118C33.5125 36.5118 32.6698 35.6777 32.6698 34.6489C32.6698 33.6201 33.5125 32.7861 34.5522 32.7861Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M51.1176 32.7861C52.1572 32.7861 53 33.6201 53 34.6489C53 35.6777 52.1572 36.5118 51.1176 36.5118C50.0779 36.5118 49.2351 35.6777 49.2351 34.6489C49.2351 33.6201 50.0779 32.7861 51.1176 32.7861Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M17.9867 16.3932C19.0263 16.3932 19.8691 17.2272 19.8691 18.256C19.8691 19.2849 19.0263 20.1189 17.9867 20.1189C16.947 20.1189 16.1042 19.2849 16.1042 18.256C16.1042 17.2272 16.947 16.3932 17.9867 16.3932Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M34.5522 16.3932C35.5918 16.3932 36.4346 17.2272 36.4346 18.256C36.4346 19.2849 35.5918 20.1189 34.5522 20.1189C33.5125 20.1189 32.6698 19.2849 32.6698 18.256C32.6698 17.2272 33.5125 16.3932 34.5522 16.3932Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M51.1176 16.3932C52.1572 16.3932 53 17.2272 53 18.256C53 19.2849 52.1572 20.1189 51.1176 20.1189C50.0779 20.1189 49.2351 19.2849 49.2351 18.256C49.2351 17.2272 50.0779 16.3932 51.1176 16.3932Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M17.9867 1.52195e-05C19.0263 1.51746e-05 19.8691 0.834042 19.8691 1.86285C19.8691 2.89167 19.0263 3.72568 17.9867 3.72568C16.947 3.72568 16.1042 2.89167 16.1042 1.86285C16.1042 0.834042 16.947 1.52645e-05 17.9867 1.52195e-05Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M34.5522 0C35.5918 -4.49708e-08 36.4346 0.834042 36.4346 1.86285C36.4346 2.89167 35.5918 3.72568 34.5522 3.72568C33.5125 3.72568 32.6698 2.89167 32.6698 1.86285C32.6698 0.834042 33.5125 4.49708e-08 34.5522 0Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M51.1176 0C52.1572 -4.49708e-08 53 0.834042 53 1.86285C53 2.89167 52.1572 3.72568 51.1176 3.72568C50.0779 3.72568 49.2351 2.89167 49.2351 1.86285C49.2351 0.834042 50.0779 4.49708e-08 51.1176 0Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M1.88244 65.274C2.92209 65.274 3.76488 66.108 3.76488 67.1369C3.76488 68.1657 2.92209 68.9997 1.88244 68.9997C0.84279 68.9997 4.54444e-08 68.1657 0 67.1369C-4.54444e-08 66.108 0.84279 65.274 1.88244 65.274Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M1.88244 48.8815C2.92209 48.8815 3.76488 49.7155 3.76488 50.7443C3.76488 51.7731 2.92209 52.6071 1.88244 52.6071C0.84279 52.6071 4.54444e-08 51.7731 0 50.7443C-4.54444e-08 49.7155 0.84279 48.8815 1.88244 48.8815Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M17.9867 65.274C19.0263 65.274 19.8691 66.108 19.8691 67.1369C19.8691 68.1657 19.0263 68.9997 17.9867 68.9997C16.947 68.9997 16.1042 68.1657 16.1042 67.1369C16.1042 66.108 16.947 65.274 17.9867 65.274Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M34.5522 65.2744C35.5918 65.2744 36.4346 66.1084 36.4346 67.1372C36.4346 68.166 35.5918 69 34.5522 69C33.5125 69 32.6698 68.166 32.6698 67.1372C32.6698 66.1084 33.5125 65.2744 34.5522 65.2744Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M51.1176 65.2744C52.1572 65.2744 53 66.1084 53 67.1372C53 68.166 52.1572 69 51.1176 69C50.0779 69 49.2351 68.166 49.2351 67.1372C49.2351 66.1084 50.0779 65.2744 51.1176 65.2744Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M17.9867 48.8811C19.0263 48.8811 19.8691 49.7151 19.8691 50.744C19.8691 51.7728 19.0263 52.6068 17.9867 52.6068C16.947 52.6068 16.1042 51.7728 16.1042 50.744C16.1042 49.7151 16.947 48.8811 17.9867 48.8811Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M34.5522 48.8811C35.5918 48.8811 36.4346 49.7151 36.4346 50.744C36.4346 51.7728 35.5918 52.6068 34.5522 52.6068C33.5125 52.6068 32.6698 51.7728 32.6698 50.744C32.6698 49.7151 33.5125 48.8811 34.5522 48.8811Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
              <path
                d="M51.1176 48.8811C52.1572 48.8811 53 49.7151 53 50.744C53 51.7728 52.1572 52.6068 51.1176 52.6068C50.0779 52.6068 49.2351 51.7728 49.2351 50.744C49.2351 49.7151 50.0779 48.8811 51.1176 48.8811Z"
                fill="white"
                fill-opacity="0.3"
              ></path>
            </svg>
          </span>

          <span className="absolute top-0 right-0 -z-10">
            <svg
              width="98"
              height="94"
              viewBox="0 0 98 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="98.5"
                cy="-4.5"
                rx="98.5"
                ry="98.5"
                transform="rotate(90 98.5 -4.5)"
                fill="url(#paint0_linear_2089_517)"
              ></ellipse>
              <defs>
                <linearGradient
                  id="paint0_linear_2089_517"
                  x1="98.5"
                  y1="-103"
                  x2="98.5"
                  y2="94"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.22"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
      <div className="bg-[#2E3842] py-7 text-sm font-light">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="order-last w-full px-4 md:w-1/2 lg:order-first lg:w-5/12 xl:w-1/3">
              <p className="text-center text-sm font-light text-[#cacbcf] lg:text-left">
                © 2023 Company. All Rights Reserved.
              </p>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-1/3">
              <div className="mx-auto mb-5 lg:mb-0">
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/footers/footer-03/payment.svg"
                  alt="payment"
                  className="mx-auto max-w-full"
                />
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-1/3">
              <div className="mb-5 flex items-center justify-center space-x-4 md:justify-end lg:mb-0">
                <span className="text-sm font-medium text-white">
                  {" "}
                  Follow Us:{" "}
                </span>

                <a
                  href="javascript:void(0)"
                  className="text-[#cacbcf] hover:text-primary"
                >
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    className="fill-current"
                  >
                    <path d="M9.00002 6.82102H7.50002H6.9643V6.27094V4.56568V4.0156H7.50002H8.62502C8.91967 4.0156 9.16074 3.79557 9.16074 3.46552V0.550082C9.16074 0.247537 8.94645 0 8.62502 0H6.66966C4.55358 0 3.08036 1.54023 3.08036 3.82307V6.21593V6.76601H2.54465H0.723216C0.348215 6.76601 0 7.06855 0 7.50862V9.48892C0 9.87397 0.294644 10.2315 0.723216 10.2315H2.49108H3.02679V10.7816V16.3099C3.02679 16.695 3.32144 17.0525 3.75001 17.0525H6.26787C6.42859 17.0525 6.56252 16.97 6.66966 16.86C6.7768 16.75 6.85716 16.5575 6.85716 16.3924V10.8091V10.259H7.41966H8.62502C8.97324 10.259 9.24109 10.039 9.29467 9.70895V9.68144V9.65394L9.66967 7.75616C9.69645 7.56363 9.66967 7.3436 9.50895 7.12356C9.45538 6.98604 9.21431 6.84852 9.00002 6.82102Z"></path>
                  </svg>
                </a>

                <a
                  href="javascript:void(0)"
                  className="text-[#cacbcf] hover:text-primary"
                >
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    className="fill-current"
                  >
                    <path d="M16.1623 3.17859L17.23 1.93274C17.5391 1.59532 17.6234 1.33577 17.6515 1.20599C16.8086 1.67319 16.0218 1.82892 15.516 1.82892H15.3193L15.2069 1.7251C14.5325 1.18004 13.6895 0.894531 12.7903 0.894531C10.8234 0.894531 9.27789 2.39993 9.27789 4.13893C9.27789 4.24275 9.27789 4.39848 9.30599 4.5023L9.39029 5.0214L8.8002 4.99545C5.20346 4.89163 2.25301 2.03656 1.77532 1.54341C0.988538 2.84117 1.43813 4.08702 1.91582 4.86567L2.8712 6.31916L1.35383 5.54051C1.38193 6.63062 1.83152 7.48714 2.70261 8.11007L3.46129 8.62917L2.70261 8.91468C3.1803 10.2384 4.24808 10.7834 5.03486 10.9911L6.07455 11.2506L5.09106 11.8736C3.51749 12.9118 1.55053 12.8339 0.679443 12.756C2.44971 13.8981 4.55717 14.1576 6.01835 14.1576C7.11423 14.1576 7.92911 14.0538 8.12581 13.9759C15.9937 12.2629 16.359 5.7741 16.359 4.47634V4.29466L16.5276 4.19084C17.4829 3.36027 17.8763 2.91903 18.1011 2.65948C18.0168 2.68544 17.9044 2.73735 17.792 2.7633L16.1623 3.17859Z"></path>
                  </svg>
                </a>

                <a
                  href="javascript:void(0)"
                  className="text-[#cacbcf] hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-current"
                  >
                    <path d="M8.71814 12.4983C10.493 12.4983 11.9319 11.09 11.9319 9.35267C11.9319 7.61538 10.493 6.20703 8.71814 6.20703C6.94324 6.20703 5.50439 7.61538 5.50439 9.35267C5.50439 11.09 6.94324 12.4983 8.71814 12.4983Z"></path>
                    <path d="M12.2087 0.947266H5.17175C2.37359 0.947266 0.101807 3.17091 0.101807 5.90979V12.7434C0.101807 15.5365 2.37359 17.7602 5.17175 17.7602H12.1533C15.0069 17.7602 17.2787 15.5365 17.2787 12.7977V5.90979C17.2787 3.17091 15.0069 0.947266 12.2087 0.947266ZM8.71795 13.4756C6.36305 13.4756 4.50684 11.6045 4.50684 9.35372C4.50684 7.10296 6.39076 5.23185 8.71795 5.23185C11.0174 5.23185 12.9013 7.10296 12.9013 9.35372C12.9013 11.6045 11.0451 13.4756 8.71795 13.4756ZM14.5359 5.61149C14.2589 5.90979 13.8433 6.07249 13.3723 6.07249C12.9568 6.07249 12.5412 5.90979 12.2087 5.61149C11.904 5.3132 11.7378 4.93355 11.7378 4.47255C11.7378 4.01155 11.904 3.65903 12.2087 3.33361C12.5135 3.0082 12.9013 2.8455 13.3723 2.8455C13.7879 2.8455 14.2312 3.0082 14.5359 3.3065C14.813 3.65903 15.0069 4.06579 15.0069 4.49967C14.9792 4.93355 14.813 5.3132 14.5359 5.61149Z"></path>
                    <path d="M13.4005 3.82227C13.0403 3.82227 12.7356 4.12056 12.7356 4.47309C12.7356 4.82562 13.0403 5.12391 13.4005 5.12391C13.7607 5.12391 14.0654 4.82562 14.0654 4.47309C14.0654 4.12056 13.7884 3.82227 13.4005 3.82227Z"></path>
                  </svg>
                </a>

                <a
                  href="javascript:void(0)"
                  className="text-[#cacbcf] hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-current"
                  >
                    <path d="M16.4834 0.947266H1.54988C0.844136 0.947266 0.279541 1.49735 0.279541 2.18495V16.7621C0.279541 17.4222 0.844136 17.9998 1.54988 17.9998H16.427C17.1327 17.9998 17.6973 17.4497 17.6973 16.7621V2.15745C17.7538 1.49735 17.1892 0.947266 16.4834 0.947266ZM5.44559 15.4419H2.87668V7.32822H5.44559V15.4419ZM4.14702 6.20055C3.30013 6.20055 2.65084 5.54045 2.65084 4.74283C2.65084 3.94521 3.32836 3.28511 4.14702 3.28511C4.96568 3.28511 5.6432 3.94521 5.6432 4.74283C5.6432 5.54045 5.02214 6.20055 4.14702 6.20055ZM15.1849 15.4419H12.6159V11.5088C12.6159 10.5737 12.5877 9.33602 11.2609 9.33602C9.90589 9.33602 9.70828 10.3812 9.70828 11.4263V15.4419H7.13937V7.32822H9.65182V8.45588H9.68005C10.047 7.79579 10.8657 7.13569 12.136 7.13569C14.7614 7.13569 15.2413 8.78594 15.2413 11.0413V15.4419H15.1849Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
