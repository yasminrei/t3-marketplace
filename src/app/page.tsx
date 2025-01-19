import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";

const perks = [
  {
    name: "Free Shipping",
    Icon: ArrowDownToLine,
    description:
      "Get free shipping on all orders over $50. No hidden fees.",
  },
  {
    name: "24/7 Support",
    Icon: ArrowDownToLine,
    description:
      "We offer 24/7 support for any questions or concerns. Our customer support team is available 24/7 to assist you.",
  },
  {
    name: "Secure Payment",
    Icon: ArrowDownToLine,
    description:
      "We offer a secure and reliable payment system to ensure your transactions are safe and secure.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>
            .
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigitalMarket. Explore our marketplace and discover the best digital assets.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
            <Button variant="ghost">About Our Collection &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper className="py-20">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
              {perks.map((perk) => (
                <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      {<perk.Icon className="h-1/3 w-1/3" aria-hidden="true" />}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
