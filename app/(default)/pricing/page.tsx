export const metadata = {
  title: "Pricing | Kariz",
  description: "Start free with 500 executions per month. Scale as you grow with simple, transparent pricing built for developers.",
};

import PageIllustration from "@/components/page-illustration";
import PricingNew from "@/components/pricing-new";
import Cta from "@/components/cta";

export default function PricingPage() {
  return (
    <>
      <PageIllustration />
      <div className="pt-8 md:pt-12">
        <PricingNew />
      </div>
      <Cta />
    </>
  );
}
