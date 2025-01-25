import { Route, Routes } from "react-router-dom";
import {
  BuyCredit,
  Home,
  Results,
  PageNotFound,
  FeaturesPage,
  InstructionsPage,
  RoadmapPage,
} from "../pages";
import ButtonGradient from "../assets/svg/ButtonGradient";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
        <Route path="/results" element={<Results />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-to-use" element={<InstructionsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ButtonGradient />
    </>
  );
};
