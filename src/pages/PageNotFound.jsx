import { Link } from "react-router-dom";
import { loading, service1 } from "../assets";
import { Button, Heading, Section } from "../components";

// import { GradientLight } from "../components/design/Benefits";
import { Gradient } from "../components/design/Services";
import { BottomLine } from "../components/design/Hero";
export const PageNotFound = () => {
  return (
    <Section className="-mb-20 overflow-hidden">
      <div className="w-full max-lg:h-[100vh] max-lg:-mt-24 flex justify-center relative overflow-hidden">
        <div className="flex flex-col justify-center items-center lg:ml-24 z-50">
          <Heading title="Page Not Found" tag="404 Error" />
          <img
            src={loading}
            className="animate-spin -mt-10 mb-10"
            alt="Spinning Icon Animation"
          />
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
        <img
          src={service1}
          alt="Robot"
          className="scale-x-[-1] h-[80vh] object-cover md:object-right max-lg:hidden"
        />
        <div className="max-lg:hidden">
          <Gradient />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};
