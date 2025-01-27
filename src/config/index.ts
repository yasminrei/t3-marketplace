export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
        {
            name: "Editor picks",
            href: "#",
            imageSrc: "/nav/ui-kits/mixed.jpg",
        },
        {
            name: "New arrivals",
            href: "#",
            imageSrc: "/nav/ui-kits/blue.jpg",
        },
        {
            name: "Bestsellers",
            href: "#",
            imageSrc: "/nav/ui-kits/purple.jpg",
        },
    ]
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
        {
            name: "Favorite Icon Picks",
            href: "#",
            imageSrc: "/nav/icons/picks.jpg",
        },
        {
            name: "New arrivals",
            href: "#",
            imageSrc: "/nav/icons/new.jpg",
        },
        {
            name: "Bestselling icons",
            href: "#",
            imageSrc: "/nav/icons/bestsellers.jpg",
        },
    ]
  },
]