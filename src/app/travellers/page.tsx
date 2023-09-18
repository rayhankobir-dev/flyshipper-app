"use client";
import { Navigation } from "@/components/custom/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";
import { DatePickerWithRange } from "@/components/custom/date-range";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";
import SectionTitle from "@/components/custom/section-title";
import Footer from "@/components/custom/footer";
import OrderCard from "@/components/traveller/order-card";

import { FaMapLocationDot } from "react-icons/fa6";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function Travellers() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <Navigation />
      <section className="relative h-[80vh] w-full ">
        <div className="absolute top-0 left-0 h-full overflow-hidden">
          <img src="/beach-3.jpeg" alt="" />
        </div>
        <div className="h-full w-full absolute z-2 "></div>
        <div className="relative pt-20 md:pt-24 px-4 md:px-24 flex flex-col md:flex-row space-x-5 justify-between">
          <div className="flex-1 md:pr-14">
            <h1 className="font-extrabold text-xl md:text-5xl py-3">
              Earn $200+ USD every time you travel abroad
            </h1>
            <p className="md:py-5 text-xs md:text-md text-gray-900 font-medium pr-14">
              Deliver products to international shoppers and cut your travel
              costs in half. Deliver products to international shoppers and cut
              your travel costs in half.
            </p>
            <Link
              href={"/"}
              className="my-4 inline-flex items-center gap-2 text-sm text-blue-700 bg-gray-100 rounded-full px-3 py-1"
            >
              How Grabr works <LiaAngleRightSolid className="text-xs" />
            </Link>

            <div className="mt-10 w-fit bg-white bg-opacity-75 rounded-lg px-5 py-2">
              <h6 className="pt-1 flex items-center text-sm text-blue-600 font-normal text-body-color">
                Used by Thriving Brands
                <span className="ml-2 inline-block h-[1px] w-8 bg-body-color"></span>
              </h6>
              <div className="flex max-w-[550px] items-center">
                <div className="mr-4 w-full py-3">
                  <img
                    src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/brands/ayroui.svg"
                    alt="ayroui"
                  />
                </div>
                <div className="mr-4 w-full py-3">
                  <img
                    src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/brands/graygrids.svg"
                    alt="graygrids"
                  />
                </div>
                <div className="mr-4 w-full py-3">
                  <img
                    src="https://demo.tailgrids.com/templates/startup/build/src/assets/images/brands/uideck.svg"
                    alt="uideck"
                  />
                </div>
              </div>
            </div>
          </div>
          <Card className="hidden md:block w-[450px] h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Create new travel plan</CardTitle>
              <CardDescription>
                Add your trip details to start earning money
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label>From</Label>

                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="h-12 justify-between"
                        >
                          {value
                            ? frameworks.find(
                                (framework) => framework.value === value
                              )?.label
                            : "Select your location..."}
                          <BiSolidPlaneTakeOff className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Arival location..."
                            className="h-9"
                          />
                          <CommandEmpty>No location found!</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                {framework.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label>From</Label>

                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="h-12 justify-between"
                        >
                          {value
                            ? frameworks.find(
                                (framework) => framework.value === value
                              )?.label
                            : "Select arrival location..."}
                          <BiSolidPlaneLand className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Arival location..."
                            className="h-9"
                          />
                          <CommandEmpty>No location found!</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                {framework.label}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label>Travel Date</Label>
                    <DatePickerWithRange className="w-full h-12" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex">
              <Button className="h-11 flex-1">Add Trip</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <main className="relative max-w-7xl mx-auto">
        <section className="md:absolute -top-10 px-6 py-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 divide-y md:divide-y-0 bg-white shadow-2xl rounded-lg">
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

          <div className="flex items-start gap-4 pt-4 md:p-0">
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

          <div className="flex items-start gap-4 pt-4 md:p-0">
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

        <div className="pt-24"></div>

        <SectionTitle
          title="Popular Destinations"
          subTitle="Explore popular places"
        />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="h-full px-4">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-3 ">
                <a
                  href="product-details.html"
                  className="block font-semibold text-black hover:text-primary text-lg"
                >
                  London UK
                </a>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3">
                  <span className="pl-2 inline-flex gap-1 items-center text-md font-semibold text-body-color">
                    (77 Orders) <GoDotFill /> 345 Offers
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
          <div className="h-full px-4">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-3 ">
                <a
                  href="product-details.html"
                  className="block font-semibold text-black hover:text-primary text-lg"
                >
                  Apple Watch Series 7
                </a>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="pl-2 inline-flex gap-1 items-center text-md font-semibold text-body-color">
                    (77 Orders) <GoDotFill /> 345 Offers
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
          <div className="h-full px-4">
            <div className="overflow-hidden rounded-lg border border-[#e7e7e7] bg-white">
              <div>
                <img
                  src="https://demo.tailgrids.com/templates/shopper/build/src/assets/ecom-images/products/product-carousel-05/image-01.jpg"
                  alt="product"
                  className="w-full"
                />
              </div>
              <div className="p-3 ">
                <a
                  href="product-details.html"
                  className="block font-semibold text-black hover:text-primary text-lg"
                >
                  Apple Watch Series 7
                </a>
              </div>
              <div className="flex justify-between border-t border-[#e7e7e7]">
                <div className="flex items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-4">
                  <span className="pl-2 inline-flex gap-1 items-center text-md font-semibold text-body-color">
                    (77 Orders) <GoDotFill /> 345 Offers
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
          title="How Earn Money"
          subTitle="How to earn money traveling"
        />
        <section className="">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="flex flex-col items-center gap-4">
              <FaMapLocationDot className="text-blue-600" size={70} />
              <div className=" text-gray-800 text-center">
                <strong className="block text-3xl font-bold">Add trip</strong>
                <p className="mt-4">
                  Start by adding your trip to see requested orders along your
                  route.
                </p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaMapLocationDot className="text-blue-600" size={70} />
              <div className=" text-gray-800 text-center">
                <strong className="block text-3xl font-bold">Add trip</strong>
                <p className="mt-4">
                  Start by adding your trip to see requested orders along your
                  route.
                </p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-4">
              <FaMapLocationDot className="text-blue-600" size={70} />
              <div className=" text-gray-800 text-center">
                <strong className="block text-3xl font-bold">Add trip</strong>
                <p className="mt-4">
                  Start by adding your trip to see requested orders along your
                  route.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <SectionTitle
          title="Recent Order Requests"
          subTitle="Recent Grabs from Around the World"
        />
        <section className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          <Button className="mx-auto h-11 w-32">Show All</Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
