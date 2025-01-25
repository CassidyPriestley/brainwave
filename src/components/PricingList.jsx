import { check } from "../assets";
import { pricing } from "../constants";
import { Button } from "./elements/Button";

export const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((priceItem) => (
        <div
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-5 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          key={priceItem.id}
        >
          <h4 className="h4 mb-4">{priceItem.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {priceItem.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {priceItem.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {priceItem.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={priceItem.price ? "/buy-credit" : "mailto:info@brainwave.com"}
            white={!!priceItem.price}
          >
            {priceItem.price ? "Get Started" : "Contact Us"}
          </Button>

          <ul>
            {priceItem.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check Icon" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
