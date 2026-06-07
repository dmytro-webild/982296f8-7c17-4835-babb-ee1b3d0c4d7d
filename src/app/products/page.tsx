"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="circleGradient"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Products",
          id: "/products",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Modern Atelier"
    />
  </div>

  <div id="all-products" data-section="all-products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "product-1",
          name: "Elegant Cream Blazer",
          price: "₺2,500",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-winter-fur-coat-walking-street_285396-4719.jpg",
          imageAlt: "Elegant Cream Blazer",
        },
        {
          id: "product-2",
          name: "Pastel Pink Silk Blouse",
          price: "₺1,800",
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-cute-pink-dress-posing-smiling-pink_140725-44908.jpg",
          imageAlt: "Pastel Pink Silk Blouse",
        },
        {
          id: "product-3",
          name: "Sage Green Wide-Leg Trousers",
          price: "₺2,000",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-blonde-woman-near-classic-fence-monaco-looking-into-camera_1268-25646.jpg",
          imageAlt: "Sage Green Wide-Leg Trousers",
        },
        {
          id: "product-4",
          name: "Classic Black Tailored Coat",
          price: "₺3,200",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-woman-brown-coat-spring-city_1157-33399.jpg",
          imageAlt: "Classic Black Tailored Coat",
        },
        {
          id: "product-5",
          name: "White Minimalist Oversized Shirt",
          price: "₺1,500",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blonde-girl-white-oversized-tshirt-blue-jeans-posing-gray-background_89887-918.jpg",
          imageAlt: "White Minimalist Oversized Shirt",
        },
        {
          id: "product-6",
          name: "Beige Knitted Midi Skirt",
          price: "₺1,600",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-attractive-woman-elegant-dress-straw-hat-summer-style-fashion-trend-vacation-smiling-stylish-accessories-sunglasses-posing-tropical-villa_285396-5686.jpg",
          imageAlt: "Beige Knitted Midi Skirt",
        },
        {
          id: "product-7",
          name: "Deep Blue Velvet Dress",
          price: "₺2,800",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-blue-suit-standing-by-window_1303-13750.jpg",
          imageAlt: "Deep Blue Velvet Dress",
        },
        {
          id: "product-8",
          name: "Camel Cashmere Sweater",
          price: "₺2,100",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-woman-casual-wear-outdoor_624325-1331.jpg",
          imageAlt: "Camel Cashmere Sweater",
        },
      ]}
      title="Shop All Collections"
      description="Browse our extensive range of minimalist fashion, from everyday essentials to statement pieces, all crafted with uncompromising quality."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Vogue",
        "Harper's Bazaar",
        "Elle",
        "Glamour",
        "Marie Claire",
        "InStyle",
        "Fashion Week",
      ]}
      title="As Seen In"
      description="Our exquisite designs have been featured in leading fashion publications and admired by top stylists worldwide."
      showCard={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Press",
              href: "#",
            },
          ],
        },
        {
          title: "Shop",
          items: [
            {
              label: "New Arrivals",
              href: "/products",
            },
            {
              label: "Collections",
              href: "/products",
            },
            {
              label: "Sale",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "/contact",
            },
            {
              label: "FAQs",
              href: "/contact#faq",
            },
            {
              label: "Shipping & Returns",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Modern Atelier"
      copyrightText="© 2024 Modern Atelier. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
