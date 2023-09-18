import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function OrderItem() {
  return (
    <div className="py-2 px-3 flex gap-2 justify-between items-center border-t">
      <div className="flex gap-3 items-center">
        <img className="w-8" src="/headphone.jpeg" alt="headphone" />
        <h1 className="text-md font-medium">Snoflow Wireless Headphone 5.2</h1>
      </div>
      <b className="font-bold">$230</b>
      <Badge className="h-fit">Requested</Badge>
      <p>30 Offers</p>
      <Button className="bg-gray-500 hover:bg-gray-600">Cancle</Button>
    </div>
  );
}
