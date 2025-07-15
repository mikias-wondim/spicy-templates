import CreativeAgencyNewAbout from "@components/creativeAgencyNew/CreativeAgencyNewAbout";
import CreativeAgencyNewBlog from "@components/creativeAgencyNew/CreativeAgencyNewBlog";
import CreativeAgencyNewFeature from "@components/creativeAgencyNew/CreativeAgencyNewFeature";
import CreativeAgencyNewFeedback from "@components/creativeAgencyNew/CreativeAgencyNewFeedback";
import CreativeAgencyNewHero from "@components/creativeAgencyNew/CreativeAgencyNewHero";
import CreativeAgencyNewService from "@components/creativeAgencyNew/CreativeAgencyNewService";
import CreativeAgencyNewSteps from "@components/creativeAgencyNew/CreativeAgencyNewSteps";
import CreativeAgencyNewTeam from "@components/creativeAgencyNew/CreativeAgencyNewTeam";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <>
      <Layout classOpt="home-36">
        <Navbar navDark />
        <CreativeAgencyNewHero />
        <CreativeAgencyNewAbout />
        <CreativeAgencyNewService />
        <CreativeAgencyNewSteps />
        <CreativeAgencyNewTeam />
        <CreativeAgencyNewFeature />
        <CreativeAgencyNewFeedback />
        <CreativeAgencyNewBlog />

        <Footer
          style={{
            background: "url('/page-header-bg.svg')no-repeat bottom right",
          }}
        />
      </Layout>
    </>
  );
};

export default index;
