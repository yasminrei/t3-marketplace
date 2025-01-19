// make use of state (interactivitiy), which we cannot do with server components
"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        // keep track of which item is currently opened and which one is not
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = activeIndex === i;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            key={category.value}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
