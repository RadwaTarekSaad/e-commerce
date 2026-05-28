"use client"

import * as React from "react"
import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "_/components/ui/navigation-menu"
import { useSession } from "next-auth/react";
import { CartContextType, useCart } from "_/app/_context/CartContext";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function NavigationMenuDemo() {

const session= useSession();
const username= session.data?.user?.name;
const isAuthenticated= session.status==="authenticated";
  const {numberOfCartItems}= (useCart() as CartContextType)

  return (
    <NavigationMenu className="z-10 backdrop-blur-sm max-w-none justify-between px-6 py-2 border-b-2  border-rose-200 shadow-[0_4px_6px_-1px_rgba(251,113,133,0.35)] sticky top-0">

<h6 className="text-rose-400">Fresh Cart</h6>

      <NavigationMenuList>


        <NavigationMenuItem className="flex md:hidden">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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


  <NavigationMenuList className=" mr-4 ">
     <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className="  hover:bg-transparent hover:text-rose-400 focus:bg-transparent ">
            <Link href="/" className="text-gray-500">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

         <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className="hover:bg-transparent  hover:text-rose-400 focus:bg-transparent">
            <Link href="/categories" className="text-gray-500">Categories</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

         <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className="hover:bg-transparent  hover:text-rose-400 focus:bg-transparent">
            <Link href="/brands" className="text-gray-500">Brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

  </NavigationMenuList>




      {/* list of the right part */}
            <NavigationMenuList className="gap-1">

<NavigationMenuItem className="hover:bg-gray-100 rounded-full p-2">
    <FaRegHeart className="cursor-pointer text-rose-400" />
</NavigationMenuItem>
<NavigationMenuItem className="hover:bg-gray-100 rounded-full p-2 relative ">
   <FaShoppingCart  className="cursor-pointer text-rose-400  " />

   {isAuthenticated && !!numberOfCartItems &&<span className="absolute bottom-[70%] right-0 bg-red-500 text-white rounded-full px-1 text-sm" >{numberOfCartItems}</span>}
</NavigationMenuItem>


        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className="hover:bg-rose-400 bg-rose-400 px-4 rounded-l-full  rounded-r-full">
            {isAuthenticated? <Link href="/profile" className=" text-white focus:bg-rose-400 ml-1 hover:bg-rose-600"><BsPerson/>{username}</Link>:<Link href="/login" className=" text-white focus:bg-rose-400 ml-1 hover:bg-rose-600"><BsPerson/>Sign In</Link>}
          </NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
        
        {/* list of the right part */}
   


      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
