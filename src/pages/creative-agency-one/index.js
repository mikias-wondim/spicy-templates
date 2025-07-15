import CreativeAgencyDesignShowcase from "@components/creativeAgencyOne/CreativeAgencyDesignShowcase";
import CreativeAgencyOneAddPlanner from "@components/creativeAgencyOne/CreativeAgencyOneAddPlanner";
import CreativeAgencyOneAward from "@components/creativeAgencyOne/CreativeAgencyOneAward";
import CreativeAgencyOneGoal from "@components/creativeAgencyOne/CreativeAgencyOneGoal";
import CreativeAgencyOneHero from "@components/creativeAgencyOne/CreativeAgencyOneHero";
import CreativeAgencyOneService from "@components/creativeAgencyOne/CreativeAgencyOneService";
import CreativeAgencyOneSupport from "@components/creativeAgencyOne/CreativeAgencyOneSupport";
import CreativeAgencyOneTechnology from "@components/creativeAgencyOne/CreativeAgencyOneTechnology";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";

import CreativeAgencyOneBlog from "@components/creativeAgencyOne/CreativeAgencyOneBlog";
import CreativeAgencyTestimonial from "@components/creativeAgencyOne/CreativeAgencyTestimonial";

const CreativeAgencyOne = () => {
  return (
    <>
      <Navbar navDark creativeAgencyOne />
      <CreativeAgencyOneHero />
      <CreativeAgencyOneService />
      <CreativeAgencyOneTechnology />
      <CreativeAgencyOneGoal />
      <CreativeAgencyOneSupport />
      <CreativeAgencyOneAward />
      <CreativeAgencyDesignShowcase />
      <CreativeAgencyOneAddPlanner />
      <CreativeAgencyTestimonial />
      <CreativeAgencyOneBlog />
      <Footer
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </>
  );
};

export default CreativeAgencyOne;
