export const metadata = {
  title: "Pricing - Kariz | Start Free with 500 Executions",
  description: "Simple, transparent pricing. Free tier with 500 executions/month, no credit card required. Plans from $0 to custom enterprise solutions.",
};

import PageIllustration from "@/components/page-illustration";
import PricingNew from "@/components/pricing-new";
import Cta from "@/components/cta";

export default function PricingPage() {
  return (
    <>
      <PageIllustration />
      <div className="pt-16 md:pt-24">
        <PricingNew />
      </div>
      <Cta />
    </>
  );
}
