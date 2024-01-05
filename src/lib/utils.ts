import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// make this global so based on user current location it will show the price

export function formatPrice(
  price: number | string,
  options: {
    currency?: "EUR" | "USD" | "INR" | "GBP" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
  }
) {
  const { currency = "USD", notation = "compact" } = options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    minimumFractionDigits: 2,
  }).format(numericPrice);
}
