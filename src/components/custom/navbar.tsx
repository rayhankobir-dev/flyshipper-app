"use client";

import * as React from "react";
import Link from "next/link";
import { BsGithub, BsGoogle, BsApple } from "react-icons/bs";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import { ProfileButton } from "./profile-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Privacy",
    href: "/privacy",
    description:
      "We always keep our users privacy, cookie data and local storage.",
  },
  {
    title: "Policies",
    href: "/policies",
    description: "Before place order please check our privacy and policies",
  },
  {
    title: "Safety",
    href: "/safety",
    description:
      "Product safety should be most considerable if you're a traveller.",
  },
  {
    title: "Support",
    href: "/support",
    description:
      "+90399 Call or chat with our customer support to resolve any issues.",
  },
];

export function Navigation() {
  const [isAuth, setIsAuth] = React.useState(false);

  const auth = () => {
    setIsAuth(true);
  };
  return (
    <header className="w-full bg-white flex justify-between items-center px-24 py-3.5 fixed z-10 border-b">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/discover" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Image
                  className="w-8"
                  src={"/logo.jpeg"}
                  height={10}
                  width={10}
                  alt=""
                />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/discover" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Discover
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/products" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/shoppers" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Shoppers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/travellers" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Travelers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Others</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {!isAuth ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-600 hover:text-blue-700"
            >
              Sign in
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-3xl font-extrabold">
                Sign in
              </DialogTitle>
              <DialogDescription>
                Sign in with your google, apple, github account.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button
                onClick={auth}
                variant="outline"
                className="inline-flex gap-2 h-11"
              >
                <BsGoogle /> Continute with Goggle
              </Button>
              <Button
                onClick={auth}
                variant="outline"
                className="inline-flex gap-2 h-11"
              >
                <BsApple /> Continute with Apple
              </Button>
              <Button
                onClick={auth}
                variant="outline"
                className="inline-flex gap-2 h-11"
              >
                <BsGithub /> Continute with Github
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <ProfileButton />
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
