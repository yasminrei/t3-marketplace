import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Take a price and target currency

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "JPY" | "INR" | "AUD" | "CAD"
    // notation is going to be "compact" by default
    // take an optional parameter for the notation
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  // default currency and notation is USD and compact
  const { currency = "USD", notation = "compact" } = options

  // before we format the price, we need to convert it to a number
  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  // return the formatted price using the passed price and currency using Intl.NumberFormat


  //create a formatting object to format the price

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}