import Footer from "@/components/custom/footer";
import { Navigation } from "@/components/custom/navbar";
import SectionTitle from "@/components/custom/section-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import {
  BsShieldFillCheck,
  BsShieldLockFill,
  BsPatchCheckFill,
  BsArrowRightCircle,
} from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";
import { TiLocation } from "react-icons/ti";
import { TbTruckDelivery, TbTableOptions } from "react-icons/tb";
import { MdPayment, MdScreenSearchDesktop } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navigation />
      <section className="relative w-full h-[85vh] bg-blue-50">
        <div className="absolute top-0 right-0 h-full w-3/6">
          <svg
            className="h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 1400"
          >
            <mask id="b" x="0" y="0" width="2000" height="1400">
              <path fill="url(#a)" d="M0 0h2000v1400H0z" />
            </mask>
            <path className="fill-transparent" d="M0 0h2000v1400H0z" />
            <g
              className="transform-origin:center center fill-none stroke-blue-300"
              stroke-width="1"
              fill="none"
              mask="url(#b)"
            >
              <path d="M0 0h100v100H0zM100 0h100v100H100zM200 0h100v100H200zM300 0h100v100H300zM400 0h100v100H400zM500 0h100v100H500zM600 0h100v100H600zM700 0h100v100H700zM800 0h100v100H800zM900 0h100v100H900zM1000 0h100v100h-100zM1100 0h100v100h-100zM1200 0h100v100h-100zM1300 0h100v100h-100zM1400 0h100v100h-100zM1500 0h100v100h-100zM1600 0h100v100h-100zM1700 0h100v100h-100zM1800 0h100v100h-100zM1900 0h100v100h-100zM0 100h100v100H0zM100 100h100v100H100zM200 100h100v100H200zM300 100h100v100H300zM400 100h100v100H400zM500 100h100v100H500zM600 100h100v100H600zM700 100h100v100H700zM800 100h100v100H800zM900 100h100v100H900zM1000 100h100v100h-100zM1100 100h100v100h-100zM1200 100h100v100h-100zM1300 100h100v100h-100zM1400 100h100v100h-100zM1500 100h100v100h-100zM1600 100h100v100h-100zM1700 100h100v100h-100zM1800 100h100v100h-100zM1900 100h100v100h-100zM0 200h100v100H0zM100 200h100v100H100zM200 200h100v100H200zM300 200h100v100H300zM400 200h100v100H400zM500 200h100v100H500zM600 200h100v100H600zM700 200h100v100H700zM800 200h100v100H800zM900 200h100v100H900zM1000 200h100v100h-100zM1100 200h100v100h-100zM1200 200h100v100h-100zM1300 200h100v100h-100zM1400 200h100v100h-100zM1500 200h100v100h-100zM1600 200h100v100h-100zM1700 200h100v100h-100zM1800 200h100v100h-100zM1900 200h100v100h-100zM0 300h100v100H0zM100 300h100v100H100zM200 300h100v100H200zM300 300h100v100H300zM400 300h100v100H400zM500 300h100v100H500zM600 300h100v100H600zM700 300h100v100H700zM800 300h100v100H800zM900 300h100v100H900zM1000 300h100v100h-100zM1100 300h100v100h-100zM1200 300h100v100h-100zM1300 300h100v100h-100zM1400 300h100v100h-100zM1500 300h100v100h-100zM1600 300h100v100h-100zM1700 300h100v100h-100zM1800 300h100v100h-100zM1900 300h100v100h-100zM0 400h100v100H0zM100 400h100v100H100zM200 400h100v100H200zM300 400h100v100H300zM400 400h100v100H400zM500 400h100v100H500zM600 400h100v100H600zM700 400h100v100H700zM800 400h100v100H800zM900 400h100v100H900zM1000 400h100v100h-100zM1100 400h100v100h-100zM1200 400h100v100h-100zM1300 400h100v100h-100zM1400 400h100v100h-100zM1500 400h100v100h-100zM1600 400h100v100h-100zM1700 400h100v100h-100zM1800 400h100v100h-100zM1900 400h100v100h-100zM0 500h100v100H0zM100 500h100v100H100zM200 500h100v100H200zM300 500h100v100H300zM400 500h100v100H400zM500 500h100v100H500zM600 500h100v100H600zM700 500h100v100H700zM800 500h100v100H800zM900 500h100v100H900zM1000 500h100v100h-100zM1100 500h100v100h-100zM1200 500h100v100h-100zM1300 500h100v100h-100zM1400 500h100v100h-100zM1500 500h100v100h-100zM1600 500h100v100h-100zM1700 500h100v100h-100zM1800 500h100v100h-100zM1900 500h100v100h-100zM0 600h100v100H0zM100 600h100v100H100zM200 600h100v100H200zM300 600h100v100H300zM400 600h100v100H400zM500 600h100v100H500zM600 600h100v100H600zM700 600h100v100H700zM800 600h100v100H800zM900 600h100v100H900zM1000 600h100v100h-100zM1100 600h100v100h-100zM1200 600h100v100h-100zM1300 600h100v100h-100zM1400 600h100v100h-100zM1500 600h100v100h-100zM1600 600h100v100h-100zM1700 600h100v100h-100zM1800 600h100v100h-100zM1900 600h100v100h-100zM0 700h100v100H0zM100 700h100v100H100zM200 700h100v100H200zM300 700h100v100H300zM400 700h100v100H400zM500 700h100v100H500zM600 700h100v100H600zM700 700h100v100H700zM800 700h100v100H800zM900 700h100v100H900zM1000 700h100v100h-100zM1100 700h100v100h-100zM1200 700h100v100h-100zM1300 700h100v100h-100zM1400 700h100v100h-100zM1500 700h100v100h-100zM1600 700h100v100h-100zM1700 700h100v100h-100zM1800 700h100v100h-100zM1900 700h100v100h-100zM0 800h100v100H0zM100 800h100v100H100zM200 800h100v100H200zM300 800h100v100H300zM400 800h100v100H400zM500 800h100v100H500zM600 800h100v100H600zM700 800h100v100H700zM800 800h100v100H800zM900 800h100v100H900zM1000 800h100v100h-100zM1100 800h100v100h-100zM1200 800h100v100h-100zM1300 800h100v100h-100zM1400 800h100v100h-100zM1500 800h100v100h-100zM1600 800h100v100h-100zM1700 800h100v100h-100zM1800 800h100v100h-100zM1900 800h100v100h-100zM0 900h100v100H0zM100 900h100v100H100zM200 900h100v100H200zM300 900h100v100H300zM400 900h100v100H400zM500 900h100v100H500zM600 900h100v100H600zM700 900h100v100H700zM800 900h100v100H800zM900 900h100v100H900zM1000 900h100v100h-100zM1100 900h100v100h-100zM1200 900h100v100h-100zM1300 900h100v100h-100zM1400 900h100v100h-100zM1500 900h100v100h-100zM1600 900h100v100h-100zM1700 900h100v100h-100zM1800 900h100v100h-100zM1900 900h100v100h-100zM0 1000h100v100H0zM100 1000h100v100H100zM200 1000h100v100H200zM300 1000h100v100H300zM400 1000h100v100H400zM500 1000h100v100H500zM600 1000h100v100H600zM700 1000h100v100H700zM800 1000h100v100H800zM900 1000h100v100H900zM1000 1000h100v100h-100zM1100 1000h100v100h-100zM1200 1000h100v100h-100zM1300 1000h100v100h-100zM1400 1000h100v100h-100zM1500 1000h100v100h-100zM1600 1000h100v100h-100zM1700 1000h100v100h-100zM1800 1000h100v100h-100zM1900 1000h100v100h-100zM0 1100h100v100H0zM100 1100h100v100H100zM200 1100h100v100H200zM300 1100h100v100H300zM400 1100h100v100H400zM500 1100h100v100H500zM600 1100h100v100H600zM700 1100h100v100H700zM800 1100h100v100H800zM900 1100h100v100H900zM1000 1100h100v100h-100zM1100 1100h100v100h-100zM1200 1100h100v100h-100zM1300 1100h100v100h-100zM1400 1100h100v100h-100zM1500 1100h100v100h-100zM1600 1100h100v100h-100zM1700 1100h100v100h-100zM1800 1100h100v100h-100zM1900 1100h100v100h-100zM0 1200h100v100H0zM100 1200h100v100H100zM200 1200h100v100H200zM300 1200h100v100H300zM400 1200h100v100H400zM500 1200h100v100H500zM600 1200h100v100H600zM700 1200h100v100H700zM800 1200h100v100H800zM900 1200h100v100H900zM1000 1200h100v100h-100zM1100 1200h100v100h-100zM1200 1200h100v100h-100zM1300 1200h100v100h-100zM1400 1200h100v100h-100zM1500 1200h100v100h-100zM1600 1200h100v100h-100zM1700 1200h100v100h-100zM1800 1200h100v100h-100zM1900 1200h100v100h-100zM0 1300h100v100H0zM100 1300h100v100H100zM200 1300h100v100H200zM300 1300h100v100H300zM400 1300h100v100H400zM500 1300h100v100H500zM600 1300h100v100H600zM700 1300h100v100H700zM800 1300h100v100H800zM900 1300h100v100H900zM1000 1300h100v100h-100zM1100 1300h100v100h-100zM1200 1300h100v100h-100zM1300 1300h100v100h-100zM1400 1300h100v100h-100zM1500 1300h100v100h-100zM1600 1300h100v100h-100zM1700 1300h100v100h-100zM1800 1300h100v100h-100zM1900 1300h100v100h-100z" />
            </g>
            <defs>
              <radialGradient id="a">
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-10 right-20 h-[500px] w-[500px] bg-blue-500 rounded-full"></div>
        <div className="relative h-full grid grid-cols-2 justify-between items-center px-24">
          <div>
            <h1 className="py-4 text-5xl font-bold">
              Shop products from USA and save up to 40%
            </h1>
            <ul className="my-5 flex flex-col gap-3 text-gray-700">
              <li className="flex gap-2 text-md items-center">
                <BsPatchCheckFill className="text-blue-600" /> Delivered by
                verified trusted travelers
              </li>
              <li className="flex gap-2 text-md items-center">
                <BsPatchCheckFill className="text-blue-600" /> Receive your
                product in 1–2 weeks
              </li>
              <li className="flex gap-2 text-md items-center">
                <BsPatchCheckFill className="text-blue-600" /> Request any
                product from all around the world
              </li>
              <li className="flex gap-2 text-md items-center">
                <BsPatchCheckFill className="text-blue-600" /> Match quickly
                with the best fitting users
              </li>
              <li className="flex gap-2 text-md items-center">
                <BsShieldFillCheck className="text-blue-600" /> Secure payment
                systems.
              </li>
            </ul>
            <div className="flex">
              <Input
                className="w-72 border border-blue-600 h-12 rounded-none rounded-l-md"
                placeholder="Find your product with e-commerce product link "
              />
              <Button className="h-12 w-32 rounded-none rounded-r-md">
                Find
              </Button>
            </div>
            <Link
              href={"/tutorials"}
              className="inline-flex items-center gap-2 text-sm py-4"
            >
              <BsArrowRightCircle /> How to order from abroad with Grabr{" "}
            </Link>
          </div>
          <div>
            <Image
              className="w-4/5 mx-auto"
              src={"/delivery.png"}
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </section>
      <main className="relative max-w-7xl mx-auto">
        <section className="absolute -top-20 px-6 py-6 w-full grid grid-cols-3 gap-5 bg-white shadow-2xl rounded-lg">
          <div className="flex items-start gap-4">
            <div className=" w-10 h-10 inline-flex justify-center items-center rounded-full bg-blue-500 text-white">
              <BsShieldLockFill />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-xl text-gray-800">
                Secure Payment
              </h2>
              <p className="text-sm text-gray-600 py-1">
                Your payment is protected and never released to the traveler
                until you confirm delivery.
              </p>
              <Link
                href={"/"}
                className="inline-flex gap-1 items-center text-xs text-blue-600"
              >
                Learn more about Trust and Safety <LiaAngleRightSolid />
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className=" w-10 h-10 inline-flex justify-center items-center rounded-full bg-blue-500 text-white">
              <BsShieldLockFill />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-xl text-gray-800">
                Guaranteed delivery
              </h2>
              <p className="text-sm text-gray-600 py-1">
                You are protected from start to finish. Receive your order as
                agreed or get 100% money back.
              </p>
              <Link
                href={"/"}
                className="inline-flex gap-1 items-center text-xs text-blue-600"
              >
                Learn more about Trust and Safety <LiaAngleRightSolid />
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className=" w-10 h-10 inline-flex justify-center items-center rounded-full bg-blue-500 text-white">
              <BsShieldLockFill />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-xl text-gray-800">
                24/7 Customer care
              </h2>
              <p className="text-sm text-gray-600 py-1">
                Customer support in your native language, within 24 hours.
              </p>
              <Link
                href={"/"}
                className="inline-flex gap-1 items-center text-xs text-blue-600"
              >
                Go to Help center <LiaAngleRightSolid />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white pt-32">
          <div className="container mx-auto">
            <div className="-mx-4 flex justify-between items-center">
              <div className="flex-1 px-4">
                <div className="mb-[60px] max-w-[700px] xl:mb-[70px]">
                  <span className="mb-3 py-1 px-3 w-fit block text-lg font-semibold text-primary bg-gray-100 rounded-full">
                    About Our App
                  </span>
                  <h2 className="text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    How to Shop from Abroad
                  </h2>
                </div>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-10">
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#4BA0FF] text-white text-5xl">
                        <MdScreenSearchDesktop />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-dark 2xl:text-[22px]">
                        Create your order
                      </h3>
                      <p className="text-base text-body-color">
                        Go to any online store and copy and paste the URL of the
                        product you would like from abroad.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-10">
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#FBD06F] text-white text-5xl">
                        <TbTableOptions />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-dark 2xl:text-[22px]">
                        Choose Traveller Offer
                      </h3>
                      <p className="text-base text-body-color">
                        The little rotter bevvy I gormless mush golly gosh cras.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-10">
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#A097FF] text-white text-5xl">
                        <MdPayment />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-dark 2xl:text-[22px]">
                        Set up secure payment
                      </h3>
                      <p className="text-base text-body-color">
                        Travelers will make offers to bring your order with them
                        to your city on their next trip. Select the offer you
                        like and pay for delivery.
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-4 sm:w-1/2">
                    <div className="mb-10">
                      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#48DB7A] text-white text-5xl">
                        <TbTruckDelivery />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-dark 2xl:text-[22px]">
                        Get your item
                      </h3>
                      <p className="text-base text-body-color">
                        Your traveler will never receive payment until you
                        confirm delivery of your order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-4">
                <div className="flex justify-center">
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                        className="dark:hidden w-[272px] h-[572px]"
                        alt=""
                      />
                      <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                        className="hidden dark:block w-[272px] h-[572px]"
                        alt=""
                        height={10}
                        width={10}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionTitle
          title={"Recent Products"}
          subTitle={"These orders were recently reviews."}
          description="Travelers will make offers to bring your order with them to your city on their next trip. Select the offer you like and pay for delivery."
        />
        <section className="grid grid-cols-3 gap-y-5">
          <div className="mx-auto h-full min-w-[300px] px-4 xs:min-w-[368px] sm:min-w-[510px] md:min-w-[350px] lg:min-w-[465px] xl:min-w-[370px] 2xl:min-w-[430px]">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <a
                  href="product-details.html"
                  className="mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
                >
                  Apple Watch Series 7
                </a>
                <p className="text-base font-medium text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit enim
                  luctus et lorem.
                </p>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>

                  <span className="pl-2 text-sm font-semibold text-body-color">
                    (55) Reviews
                  </span>
                </div>
                <div className="border-l border-[#e7e7e7] py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="text-base font-semibold text-black">
                    $299
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-full min-w-[300px] px-4 xs:min-w-[368px] sm:min-w-[510px] md:min-w-[350px] lg:min-w-[465px] xl:min-w-[370px] 2xl:min-w-[430px]">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <a
                  href="product-details.html"
                  className="mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
                >
                  Apple Watch Series 7
                </a>
                <p className="text-base font-medium text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit enim
                  luctus et lorem.
                </p>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>

                  <span className="pl-2 text-sm font-semibold text-body-color">
                    (55) Reviews
                  </span>
                </div>
                <div className="border-l border-[#e7e7e7] py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="text-base font-semibold text-black">
                    $299
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-full min-w-[300px] px-4 xs:min-w-[368px] sm:min-w-[510px] md:min-w-[350px] lg:min-w-[465px] xl:min-w-[370px] 2xl:min-w-[430px]">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <a
                  href="product-details.html"
                  className="mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
                >
                  Apple Watch Series 7
                </a>
                <p className="text-base font-medium text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit enim
                  luctus et lorem.
                </p>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>

                  <span className="pl-2 text-sm font-semibold text-body-color">
                    (55) Reviews
                  </span>
                </div>
                <div className="border-l border-[#e7e7e7] py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="text-base font-semibold text-black">
                    $299
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-full min-w-[300px] px-4 xs:min-w-[368px] sm:min-w-[510px] md:min-w-[350px] lg:min-w-[465px] xl:min-w-[370px] 2xl:min-w-[430px]">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <a
                  href="product-details.html"
                  className="mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
                >
                  Apple Watch Series 7
                </a>
                <p className="text-base font-medium text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit enim
                  luctus et lorem.
                </p>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>

                  <span className="pl-2 text-sm font-semibold text-body-color">
                    (55) Reviews
                  </span>
                </div>
                <div className="border-l border-[#e7e7e7] py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="text-base font-semibold text-black">
                    $299
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-full min-w-[300px] px-4 xs:min-w-[368px] sm:min-w-[510px] md:min-w-[350px] lg:min-w-[465px] xl:min-w-[370px] 2xl:min-w-[430px]">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <a
                  href="product-details.html"
                  className="mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
                >
                  Apple Watch Series 7
                </a>
                <p className="text-base font-medium text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit enim
                  luctus et lorem.
                </p>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>

                  <span className="pl-2 text-sm font-semibold text-body-color">
                    (55) Reviews
                  </span>
                </div>
                <div className="border-l border-[#e7e7e7] py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="text-base font-semibold text-black">
                    $299
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-full min-w-[300px] px-4 xs:min-w-[368px] sm:min-w-[510px] md:min-w-[350px] lg:min-w-[465px] xl:min-w-[370px] 2xl:min-w-[430px]">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-6">
                <a
                  href="product-details.html"
                  className="mb-4 block text-lg font-semibold text-black hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
                >
                  Apple Watch Series 7
                </a>
                <p className="text-base font-medium text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit enim
                  luctus et lorem.
                </p>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>
                  <span className="mr-[2px]">
                    <svg
                      className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 lg:h-3 lg:w-3 xl:h-5 xl:w-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4688C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1562 15.9062 18.8438 15.8124 18.4688L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      ></path>
                    </svg>
                  </span>

                  <span className="pl-2 text-sm font-semibold text-body-color">
                    (55) Reviews
                  </span>
                </div>
                <div className="border-l border-[#e7e7e7] py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="text-base font-semibold text-black">
                    $299
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionTitle
          title={"Testmonials"}
          subTitle={"These orders were recently reviews."}
        />
        <section className="bg-white dark:bg-gray-900">
          <div className="max-w-screen-xl px-4 py-2 mx-auto text-center lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  This is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Micheal Gough
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
