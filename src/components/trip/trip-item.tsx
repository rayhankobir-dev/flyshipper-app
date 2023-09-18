import { BsStar } from "react-icons/bs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
export default function TripItem() {
  return (
    <div className="py-2 px-3 flex gap-2 justify-between items-center border-t">
      <div className="flex gap-3 items-center">
        <img className="w-8" src="/headphone.jpeg" alt="headphone" />
        <h1 className="text-md font-medium">Snoflow Wireless Headphone 5.2</h1>
      </div>
      <b className="font-bold">$230</b>
      <Badge className="h-fit">Completed</Badge>
      <div className="flex gap-1 items-center">
        <BsStar size="14" />
        <BsStar size="14" />
        <BsStar size="14" />
        <BsStar size="14" />
        <BsStar size="14" />
      </div>
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button className="bg-gray-500 hover:bg-gray-600">More</Button>
    </div>
  );
}
