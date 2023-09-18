"use client";
import { Navigation } from "@/components/custom/navbar";
import { BsPlus } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { BiSolidPlaneTakeOff, BiSolidPlaneLand } from "react-icons/bi";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { DatePickerWithRange } from "@/components/custom/date-range";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItem from "@/components/order/order-item";
import TripItem from "@/components/trip/trip-item";
import { useState } from "react";

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

export default function Trips() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <Navigation />
      <main className="pt-20 max-w-7xl mx-auto">
        <section>
          <div className="flex justify-between gap-3">
            <div>
              <h1 className="text-4xl font-bold">Trips</h1>
              <p className="max-w-sm py-3 text-sm font-light">
                Your upcomming and past trips are in pending state and you will
                find past and ongining trips here.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="h-10">
                  <BsPlus size="22" />
                  Make trip
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle> Create new travel plan</DialogTitle>
                  <DialogDescription>
                    Add your trip details to start earning money
                  </DialogDescription>
                </DialogHeader>
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
                <DialogFooter className="flex">
                  <Button className="h-11 flex-1">Add Trip</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <Card className="overflow-hidden mt-5">
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="p-0 grid w-full grid-cols-3 rounded-none h-12">
                <TabsTrigger value="recent" className="h-12 rounded-none">
                  Recent
                </TabsTrigger>
                <TabsTrigger value="past" className="h-12 rounded-none">
                  Past
                </TabsTrigger>
                <TabsTrigger value="upcomming" className="h-12 rounded-none">
                  Upcomming
                </TabsTrigger>
              </TabsList>
              <TabsContent value="recent">
                <Card className="drop-shadow-none shadow-none border-none">
                  <CardHeader>
                    <CardTitle>Recent</CardTitle>
                    <CardDescription>
                      This are requested orders below you can cancle it if it is
                      avilable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="divide-y">
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                    <TripItem />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Card>
        </section>
      </main>
    </>
  );
}
