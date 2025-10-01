export const metadata = {
  title: "E-commerce Integration Platform for SaaS | Shopify, Amazon, WooCommerce",
  description: "Build e-commerce integrations your customers manage. Stop rebuilding Shopify, Amazon, WooCommerce integrations for every customer. Built-in user management.",
};

import PageIllustration from "@/components/page-illustration";
import EcommerceSaasHero from "@/components/ecommerce-saas-hero";
import UserManagementFeature from "@/components/user-management-feature";
import EcommerceUseCases from "@/components/ecommerce-use-cases";
import PricingTeaser from "@/components/pricing-teaser";
import Cta from "@/components/cta";

export default function ForEcommerce() {
  return (
    <>
      <PageIllustration />
      <EcommerceSaasHero />
      <UserManagementFeature />
      <EcommerceUseCases />
      <PricingTeaser />
      <Cta />
    </>
  );
}
