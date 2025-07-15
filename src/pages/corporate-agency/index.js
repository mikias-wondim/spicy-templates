import CorporateAgencyAchievement from "@components/corporateAgency/CorporateAgencyAchievement";
import CorporateAgencyBlog from "@components/corporateAgency/CorporateAgencyBlog";
import CorporateAgencyCta from "@components/corporateAgency/CorporateAgencyCta";
import CorporateAgencyFeedback from "@components/corporateAgency/CorporateAgencyFeedback";
import CorporateAgencyHero from "@components/corporateAgency/CorporateAgencyHero";
import CorporateAgencyIndustry from "@components/corporateAgency/CorporateAgencyIndustry";
import CorporateAgencyPricing from "@components/corporateAgency/CorporateAgencyPricing";
import CorporateAgencyProjects from "@components/corporateAgency/CorporateAgencyProjects";
import CorporateAgencyService from "@components/corporateAgency/CorporateAgencyService";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <Layout classOpt="home-35">
      <Navbar corporate />
      <CorporateAgencyHero />
      <CorporateAgencyAchievement />
      <CorporateAgencyService />
      <CorporateAgencyProjects />
      <CorporateAgencyPricing />
      <CorporateAgencyIndustry />
      <CorporateAgencyCta />
      <CorporateAgencyFeedback />
      <CorporateAgencyBlog />
      <Footer
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default index;
