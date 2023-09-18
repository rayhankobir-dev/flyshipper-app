import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OrderCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-4">
          <img
            className="h-12 w-12 rounded-full"
            src="/person-1.jpeg"
            alt="person-1"
          />
          <div>
            <h2 className="text-lg font-semibold">Maria</h2>
            <p className="text-sm text-gray-500">Requested 2 minutes ago</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex gap-4 justify-between">
          <img
            className="w-14 h-fit md:w-48 p-1 border rounded-md"
            src="/headphone.jpeg"
            alt="headphone"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-md md:text-3xl font-bold">
              1More Snoflow SE Active Headphone
            </h1>
            <p className="text-xs md:text-sm text-gray-700">
              Deviler to <span>Buenos Aires, AR</span>
              Deviler from <span>United States of America</span>
            </p>
            <p className="text-xs md:text-sm text-gray-700">
              Before October 20, 2023
            </p>

            <div className="p-2 bg-blue-200 rounded-lg text-xs md:text-sm">
              <p className="py-1">Where to buy: www.amazon.com</p>
              <p className="py-1">Product price: $300</p>
            </div>
          </div>
        </div>

        <h2 className="self-end text-lg font-medium">
          Traveler reward: <span className="font-extrabold">$12</span>
        </h2>

        <Button className="h-12 w-full text-md">Make offer</Button>
      </CardContent>
    </Card>
  );
}
