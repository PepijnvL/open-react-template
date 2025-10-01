export const metadata = {
  title: "E-commerce Multi-Store Automation | Sync Shopify, Amazon, WooCommerce",
  description: "Automate inventory sync, order management, and customer data across all your e-commerce stores. Real-time sync for Shopify, Amazon, WooCommerce, and Bol.com.",
};

import PageIllustration from "@/components/page-illustration";
import EcommerceHero from "@/components/ecommerce-hero";
import EcommerceProblems from "@/components/ecommerce-problems";
import EcommerceSolution from "@/components/ecommerce-solution";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";

export default function ForEcommerce() {
  return (
    <>
      <PageIllustration />
      <EcommerceHero />
      <EcommerceProblems />
      <EcommerceSolution />
      <Pricing />
      <Cta />
    </>
  );
}
