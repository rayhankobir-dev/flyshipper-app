import Footer from "@/components/custom/footer";
import { Navigation } from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BsPlus } from "react-icons/bs";

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

export default function Orders() {
  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto">
        <section className="pt-24">
          <div className="flex justify-between gap-3">
            <div>
              <h1 className="text-4xl font-bold">Orders</h1>
              <p className="max-w-sm py-3 text-sm font-light">
                Your requested orders are in pending state and you will find
                past and ongining orders here.
              </p>
            </div>
            <Button className="h-10">
              <BsPlus size="22" />
              Create order
            </Button>
          </div>

          <Card className="overflow-hidden mt-5">
            <Tabs defaultValue="requested" className="w-full">
              <TabsList className="p-0 grid w-full grid-cols-4 rounded-none h-12">
                <TabsTrigger value="requested" className="h-12 rounded-none">
                  Requested
                </TabsTrigger>
                <TabsTrigger value="transit" className="h-12 rounded-none">
                  In transit
                </TabsTrigger>
                <TabsTrigger value="receieved" className="h-12 rounded-none">
                  Receieved
                </TabsTrigger>
                <TabsTrigger value="inactive" className="h-12 rounded-none">
                  Inactive
                </TabsTrigger>
              </TabsList>
              <TabsContent value="requested">
                <Card className="drop-shadow-none shadow-none border-none">
                  <CardHeader>
                    <CardTitle>Requested Orders</CardTitle>
                    <CardDescription>
                      This are requested orders below you can cancle it if it is
                      avilable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="divide-y">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="transit">
                <Card className="drop-shadow-none shadow-none border-none">
                  <CardHeader>
                    <CardTitle>Transit Orders</CardTitle>
                    <CardDescription>
                      This are requested orders below you can cancle it if it is
                      avilable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="divide-y">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="receieved">
                <Card className="drop-shadow-none shadow-none border-none">
                  <CardHeader>
                    <CardTitle>Receieved Orders</CardTitle>
                    <CardDescription>
                      This are requested orders below you can cancle it if it is
                      avilable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="divide-y">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="inactive">
                <Card className="drop-shadow-none shadow-none border-none">
                  <CardHeader>
                    <CardTitle>Inactive Orders</CardTitle>
                    <CardDescription>
                      This are requested orders below you can cancle it if it is
                      avilable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="divide-y">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
