"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

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

  <div id="contact-form" data-section="contact-form">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect With Us"
      description="Have a question about an order, styling advice, or a partnership inquiry? We're here to help you with anything you need."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-woman-sitting-floor_23-2149190398.jpg"
      imageAlt="Minimalist fashion boutique interior"
      mediaPosition="left"
      buttonText="Send Message"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "What materials do you use for your garments?",
          content: "We prioritize high-quality, ethically sourced natural fibers like organic cotton, silk, linen, and sustainable wool blends. Each product description provides specific material details.",
        },
        {
          id: "faq-2",
          title: "Do you offer international shipping?",
          content: "Yes, we offer worldwide shipping. Shipping costs and delivery times vary by destination and will be calculated at checkout. Please check our shipping policy for more details.",
        },
        {
          id: "faq-3",
          title: "What is your return policy?",
          content: "We accept returns of unworn, unwashed items with original tags attached within 14 days of receipt. Please visit our Returns page for detailed instructions on how to initiate a return.",
        },
        {
          id: "faq-4",
          title: "How can I find my correct size?",
          content: "Each product page features a comprehensive size guide with measurements to help you find the perfect fit. If you need further assistance, our customer service team is happy to help.",
        },
        {
          id: "faq-5",
          title: "Are your products sustainably made?",
          content: "Sustainability is a core value at Modern Atelier. We focus on ethical production practices, reducing waste, and using environmentally friendly materials. Learn more on our About Us page.",
        },
        {
          id: "faq-6",
          title: "Can I track my order?",
          content: "Once your order has shipped, you will receive an email with a tracking number and a link to monitor your package's journey. You can also track your order directly on our website.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common inquiries about our products, shipping, and returns. If you can't find what you're looking for, feel free to contact us directly."
      faqsAnimation="slide-up"
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
