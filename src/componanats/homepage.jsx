import React from "react";
import FirstSection from "./home page/first section";
import ShareRacipeComponant from "./home page/share racipe";
import TradingRecipeComponant from "./home page/tranding racipe";
import BlogComponanat from "./home page/blog";
import ExpolorRacipeComponant from "./home page/expolor racipe";
import StayInTouchComponant from "./home page/stay in touch";
import PopularCategorieComponant from "./home page/catagroys";
import LogoesComponant from "./home page/logos";
import FoterComponant from "./home page/footer";

const HomePage = () => {
  return (
    <>
      <FirstSection />
      <ShareRacipeComponant />
      <TradingRecipeComponant />
      <BlogComponanat />
      <ExpolorRacipeComponant />
      <StayInTouchComponant />
      <PopularCategorieComponant />
      <LogoesComponant />
      <FoterComponant />
    </>
  );
};

export default HomePage;
