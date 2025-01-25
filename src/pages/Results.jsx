import { useContext, useState } from "react";
import { Section } from "../components";
import { useTitle } from "../hooks/useTitle";
import { benefitImage2 } from "../assets";
import { LeftLine, RightLine } from "../components/design/Pricing";
import { Heading } from "../components";
import { Tagline } from "../components";
import { Gradient } from "../components/design/Roadmap";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  useTitle("Results");
  const [image, setImage] = useState(benefitImage2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const { generateImage } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (inputPrompt) {
      const image = await generateImage(inputPrompt);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <Section crosses>
      <form onSubmit={onSubmitHandler}>
        <div className="container">
          <div className="relative max-w-[25rem] mx-auto py-24 lg:py-0 flex flex-col items-center">
            <Heading title="Get Started" className="-mt-4 xs:-mb-16" />

            <Tagline className="text-center -mt-10 mb-10 lg:-mt-20">
              Turn your imagination into striking visuals
            </Tagline>
            <Gradient />
            <div>
              <div className="relative">
                <img
                  src={image}
                  alt="AI Generated Image"
                  className="rounded-2xl"
                />
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-color-1 ${
                    loading ? "w-full transition-all duration-[10s]" : "w-0"
                  }`}
                />
              </div>
              <p className={`${!loading ? "hidden" : ""} font-code`}>
                Loading.....
              </p>
            </div>

            {!isImageLoaded && (
              <div className="flex flex-col w-full max-w-xl bg-[#201f23] text-sm p-0.5 mt-10 rounded-2xl">
                <textarea
                  rows={4}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  value={inputPrompt}
                  type="text"
                  placeholder="Describe what you want to generate..."
                  className="flex-1 w-5/6 py-4 mx-auto bg-transparent outline-none max-sm:w-5/6 placeholder-gray-400 placeholder:font-code resize-none"
                />
                <button
                  type="submit"
                  className="bg-color-1 px-10 sm:px-16 py-3 rounded-b-2xl text-white font-code uppercase"
                >
                  Generate
                </button>
              </div>
            )}

            {isImageLoaded && (
              <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
                <div
                  className="flex items-center gap-1 bg-conic-gradient text-slate-200 px-0.5 py-0.5 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer"
                  onClick={() => setIsImageLoaded(false)}
                >
                  <div
                    className="relative p-3 bg-n-8 rounded-full overflow-hidden"
                    onClick={() => navigate("/buy-credit")}
                  >
                    <p className="text-sm font-mono text-n-1 px-3">
                      Generate Another
                    </p>
                  </div>
                </div>
                <a
                  href={image}
                  download
                  className="bg-color-1 px-10 py-3 font-mono text-sm rounded-full cursor-pointer hover:scale-105 transition-all duration-500"
                >
                  Download
                </a>
              </div>
            )}
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </form>
    </Section>
  );
};
