"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
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

  <div id="about-details" data-section="about-details">
      <TextAbout
      useInvertedBackground={false}
      title="Craftsmanship & Our Commitment to Sustainable Luxury"
      description="At Modern Atelier, we are committed to the philosophy of slow fashion. Our garments are meticulously crafted in Turkey using sustainable practices and premium, ethically sourced fabrics, ensuring not only lasting quality and style but also a positive impact."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "team-1",
          name: "Emine Sultan",
          role: "Founder & Lead Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-sexy-woman-pink-luxury-dress-summer-trend-chic-style-fashion-designer-working-office-computer_285396-2964.jpg",
          imageAlt: "Emine Sultan",
        },
        {
          id: "team-2",
          name: "Deniz Arslan",
          role: "Head of Atelier",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-sitting-chair_23-2149213192.jpg",
          imageAlt: "Deniz Arslan",
        },
        {
          id: "team-3",
          name: "Aslıhan Pekcan",
          role: "Marketing & E-commerce",
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-gray-dress-yellow-jacket-is-standing-near-table-workshop-studio-she-has-lot-creative-stuff-table-she-is-smiling-camera_197531-836.jpg",
          imageAlt: "Aslıhan Pekcan",
        },
      ]}
      title="Meet the Visionaries Behind Modern Atelier"
      description="Our passionate team is dedicated to bringing you elegant designs that celebrate individuality and timeless beauty, crafted with a deep understanding of Turkish heritage and modern style."
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
