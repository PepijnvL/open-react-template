export const metadata = {
  title: "Kariz for E-commerce | Shopify, Amazon & WooCommerce Integrations",
  description: "Add e-commerce integrations to your platform in hours, not months. Your customers connect their stores, you focus on building features.",
};

import PageIllustration from "@/components/page-illustration";
import EcommerceSaasHero from "@/components/ecommerce-saas-hero";
import MultiStoreFlowDemo from "@/components/multi-store-flow-demo";
import EcommerceUseCases from "@/components/ecommerce-use-cases";
import PricingTeaser from "@/components/pricing-teaser";
import Cta from "@/components/cta";

export default function ForEcommerce() {
  return (
    <>
      <PageIllustration />
      <EcommerceSaasHero />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-4 md:pb-20 md:pt-8">
            <MultiStoreFlowDemo />
          </div>
        </div>
      </section>
      <EcommerceUseCases />
      <PricingTeaser />
      <Cta />
    </>
  );
}
