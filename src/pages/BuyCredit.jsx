import { Heading, Section, Tagline } from "../components";
import { PricingList } from "../components/PricingList";

export const BuyCredit = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container mt-12 md:mt-16">
        <div className="mt-10 -mb-10 mx-6">
          <Heading title="Choose a Plan" tag="Our Plans" className="" />
        </div>
        <div className="mx-auto p-4 flex flex-col items-center justify-center lg:px-28">
          <PricingList />
        </div>
      </div>
    </Section>
  );
};
