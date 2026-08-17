"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
import ProductShowcase from "@/components/product-showcase";
import Categories from "@/components/categories";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <ProductShowcase />
        <Categories />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
