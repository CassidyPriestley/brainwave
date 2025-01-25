import {
  Benefits,
  Collaboration,
  Hero,
  Pricing,
  Roadmap,
  Services,
} from "../components";

export const Home = () => {
  return (
    <div className="pt-[4.75rem] md:pt-[4.7rem] max-sm:-mt-32 overflow-hidden">
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
    </div>
  );
};
