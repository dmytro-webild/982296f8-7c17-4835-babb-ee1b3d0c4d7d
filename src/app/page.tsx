"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';

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
          name: "Home",          id: "/"},
        {
          name: "Products",          id: "/products"},
        {
          name: "About",          id: "/about"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="Modern Atelier"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient"}}
      title="Minimalist Style, Timeless Elegance"
      description="Discover curated fashion that speaks to your modern aesthetic. Thoughtfully designed pieces for the contemporary woman."
      tag="Luxury Turkish Fashion"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Shop Collection",          href: "/products"},
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-brunette-woman-evening-dress-posing_176420-3747.jpg",          imageAlt: "Woman in elegant minimalist fashion"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-casual-woman-fashion-set_74190-574.jpg",          imageAlt: "Luxury fashion accessories"}
      ]}
      mediaAnimation="opacity"
      rating={5}
      ratingText="5/5 Stars by Elite Clientele"
    />
  </div>

  <div id="featured-products" data-section="featured-products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "product-1",          name: "Elegant Cream Blazer",          price: "₺2,500",          imageSrc: "http://img.b2bpic.net/free-photo/attractive-lady-oversized-jacket-jacket-walking-around-city-beautiful-dark-haired-woman-grey-pantsuit-looks-into-camera-moves-outside_197531-18564.jpg",          imageAlt: "Elegant Cream Blazer"},
        {
          id: "product-2",          name: "Pastel Pink Silk Blouse",          price: "₺1,800",          imageAlt: "Pastel Pink Silk Blouse",          imageSrc: "http://img.b2bpic.net/free-photo/young-slim-sensual-girl-gray-dress-sunglasses-leaning_613910-8765.jpg"},
        {
          id: "product-3",          name: "Sage Green Wide-Leg Trousers",          price: "₺2,000",          imageAlt: "Sage Green Wide-Leg Trousers",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-woman-carrying-groceries-bag_23-2148672907.jpg"},
        {
          id: "product-4",          name: "Classic Black Tailored Coat",          price: "₺3,200",          imageAlt: "Classic Black Tailored Coat",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-wearing-jacket-walking-outside_1303-25116.jpg"},
        {
          id: "product-5",          name: "White Minimalist Oversized Shirt",          price: "₺1,500",          imageAlt: "White Minimalist Oversized Shirt",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-christian-man-church_23-2149344160.jpg"},
        {
          id: "product-6",          name: "Beige Knitted Midi Skirt",          price: "₺1,600",          imageAlt: "Beige Knitted Midi Skirt",          imageSrc: "http://img.b2bpic.net/free-photo/attractive-stylish-smiling-woman-with-curly-hair-walking-park-dressed-warm-brown-coat-autumn-trendy-fashion-street-style-wearing-hat-sunglasses_285396-6843.jpg"},
      ]}
      title="Featured Collection"
      description="Explore our latest arrivals and timeless pieces, crafted for the discerning eye and a modern aesthetic."
      buttons={[
        { text: "View All Products", href: "/products" }
      ]}
    />
  </div>

  <div id="about-home" data-section="about-home">
      <TextAbout
      useInvertedBackground={false}
      title="Our Vision for Modern Elegance"
      buttons={[
        {
          text: "Learn More",          href: "/about"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Elif Kaya",          role: "Fashion Consultant",          company: "Style Ankara",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-lady-with-dark-curly-hair-white-costume-sitting-table-joyfully-looking-camera-while-spending-time-cafe-street_574295-81.jpg",          imageAlt: "Elif Kaya"},
        {
          id: "2",          name: "Zeynep Demir",          role: "Creative Director",          company: "Istanbul Chic",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-talking-her-mobile_1157-680.jpg",          imageAlt: "Zeynep Demir"},
        {
          id: "3",          name: "Aylin Şahin",          role: "Brand Strategist",          company: "Trends Turkey",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-mirror_1301-1468.jpg",          imageAlt: "Aylin Şahin"},
        {
          id: "4",          name: "Banu Akın",          role: "Luxury Buyer",          company: "Premium Picks",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-repair-sale-shop_23-2150746345.jpg",          imageAlt: "Banu Akın"},
        {
          id: "5",          name: "Ceren Yılmaz",          role: "E-commerce Specialist",          company: "Digital Retail Co.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excited-carefree-happy-stressfree-charming-blond-european-woman-calm-feelings-control-show-zen-gesture-standing-nirvana-lotus-pose-meditating-joyfully-smiling-calmddown-red-background_1258-308575.jpg",          imageAlt: "Ceren Yılmaz"},
      ]}
      kpiItems={[
        {
          value: "98%",          label: "Customer Satisfaction"},
        {
          value: "2M+",          label: "Products Sold"},
        {
          value: "50+",          label: "Seasonal Collections"},
      ]}
      title="Voices of Our Clientele"
      description="Hear what our cherished customers have to say about their Modern Atelier experience, celebrating our quality and design."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Ready to transform your wardrobe? Reach out to us today."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "/about"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Press",              href: "#"},
          ],
        },
        {
          title: "Shop",          items: [
            {
              label: "New Arrivals",              href: "/products"},
            {
              label: "Collections",              href: "/products"},
            {
              label: "Sale",              href: "#"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact Us",              href: "/contact"},
            {
              label: "FAQs",              href: "/contact#faq"},
            {
              label: "Shipping & Returns",              href: "#"},
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
