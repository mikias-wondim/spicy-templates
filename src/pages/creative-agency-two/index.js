import CreativeAgencyTwoFooter from "@components/creativeAgencyTwo/CreativeAgencyTwoFooter";
import CreativeAgencyTwoHeaderTop from "@components/creativeAgencyTwo/CreativeAgencyTwoHeaderTop";
import CreativeAgencyTwoHero from "@components/creativeAgencyTwo/CreativeAgencyTwoHero";
import CreativeAgencyTwoInfocard from "@components/creativeAgencyTwo/CreativeAgencyTwoInfocard";
import CreativeAgencyTwoInfocardLarge from "@components/creativeAgencyTwo/CreativeAgencyTwoInfocardLarge";
import CreativeAgencyTwoMission from "@components/creativeAgencyTwo/CreativeAgencyTwoMission";
import CreativeAgencyTwoNavbar from "@components/creativeAgencyTwo/CreativeAgencyTwoNavbar";
import CreativeAgencyTwoPortfolio from "@components/creativeAgencyTwo/CreativeAgencyTwoPortfolio";
import CreativeAgencyTwoPortfolioPost from "@components/creativeAgencyTwo/CreativeAgencyTwoPortfolioPost";
import CreativeAgencyTwoPrice from "@components/creativeAgencyTwo/CreativeAgencyTwoPrice";
import CreativeAgencyTwoProduct from "@components/creativeAgencyTwo/CreativeAgencyTwoProduct";
import CreativeAgencyTwoService from "@components/creativeAgencyTwo/CreativeAgencyTwoService";
import CreativeAgencyTwoTestimonial from "@components/creativeAgencyTwo/CreativeAgencyTwoTestimonial";
import Layout from "@layout/Layout";

const CreativeAgencyTwo = () => {
  return (
    <Layout>
      <CreativeAgencyTwoNavbar />
      <CreativeAgencyTwoHeaderTop />
      <CreativeAgencyTwoHero />
      <CreativeAgencyTwoInfocard />
      <CreativeAgencyTwoMission />
      <CreativeAgencyTwoPortfolioPost />
      <CreativeAgencyTwoInfocardLarge />
      <CreativeAgencyTwoPortfolio />
      <CreativeAgencyTwoProduct />
      <CreativeAgencyTwoTestimonial />
      <CreativeAgencyTwoPrice />
      <CreativeAgencyTwoService />
      <CreativeAgencyTwoFooter />
    </Layout>
  );
};

export default CreativeAgencyTwo;
