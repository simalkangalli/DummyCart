import { bannerImage } from "@/assets";


export const navigation = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Categories", href: "/categories" },
  { title: "Offers", href: "/offers" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const banner = {
  _id: 1001,
  priceText: "Shop Day",
  title: "The best Collection of 2025",
  textOne: " offer",
  offerPrice: "-50%",
  textTwo: "off this week",
  buttonLink: "/products",
  image: bannerImage,
};