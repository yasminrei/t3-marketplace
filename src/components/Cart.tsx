"use client"

import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Cart = () => {

  const itemCount = 1;
  const fee = 1;

  // calculate total price
  const total = 1;

  return <Sheet>
    <SheetTrigger className="group -m-2 flex items-center p-2">
      <ShoppingCart aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"></ShoppingCart>
      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {itemCount}
      </span>
    </SheetTrigger>
    <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
      <SheetHeader className="space-y-2.5 pr-6">
        <SheetTitle className="">
          Cart (0)
        </SheetTitle>
      </SheetHeader>

      {/* if itemcount > 0, render cart items. if not, render image placeholder */}

      {itemCount > 0 ? (
        <>
          <div className="flex w-full flex-col pr-6">
            cart items here
          </div>
          <div className="space-y-4 pr-6">
            <Separator />
            <div className="space-y-1.5 pr-6">
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
                <span>{formatPrice(fee)}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <SheetFooter>

            <SheetTrigger asChild className="flex justify-center">
              <Link href="/cart" className={buttonVariants({ variant: "default", className: "w-full" })}>
                Continue to Checkout
              </Link>
            </SheetTrigger>

            </SheetFooter>
          </div>
        </>
      ) : (<div></div>)}
    </SheetContent>
    
  </Sheet>
}

export default Cart;