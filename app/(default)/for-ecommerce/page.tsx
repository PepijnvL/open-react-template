export const metadata = {
  title: "E-commerce Integration Platform for SaaS | Shopify, Amazon, WooCommerce",
  description: "Build e-commerce integrations your customers manage. Stop rebuilding Shopify, Amazon, WooCommerce integrations for every customer. Built-in user management.",
};

import PageIllustration from "@/components/page-illustration";
import EcommerceSaasHero from "@/components/ecommerce-saas-hero";
import MultiStoreFlowDemo from "@/components/multi-store-flow-demo";
import UserManagementFeature from "@/components/user-management-feature";
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
          <div className="py-12 md:py-20">
            <MultiStoreFlowDemo />
          </div>
        </div>
      </section>
      <UserManagementFeature />
      <EcommerceUseCases />
      <PricingTeaser />
      <Cta />
    </>
  );
}
