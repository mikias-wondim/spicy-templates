import CrmFooter from "@components/crmHome/CrmFooter";
import SoftwareCompanyAbout from "@components/softwareCompanyHome/SoftwareCompanyAbout";
import SoftwareCompanyBlog from "@components/softwareCompanyHome/SoftwareCompanyBlog";
import SoftwareCompanyCta from "@components/softwareCompanyHome/SoftwareCompanyCta";
import SoftwareCompanyFeedback from "@components/softwareCompanyHome/SoftwareCompanyFeedback";
import SoftwareCompanyHero from "@components/softwareCompanyHome/SoftwareCompanyHero";
import SoftwareCompanyHowItWork from "@components/softwareCompanyHome/SoftwareCompanyHowItWork";
import SoftwareCompanyPortfolio from "@components/softwareCompanyHome/SoftwareCompanyPortfolio";
import SoftwareCompanyPricing from "@components/softwareCompanyHome/SoftwareCompanyPricing";
import SoftwareCompanyService from "@components/softwareCompanyHome/SoftwareCompanyService";
import SoftwareCompanyTeam from "@components/softwareCompanyHome/SoftwareCompanyTeam";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const SoftwareCompany = () => {
  return (
    <>
      <Layout>
        <Navbar navDark />
        <SoftwareCompanyHero />
        <SoftwareCompanyService />
        <SoftwareCompanyAbout />
        <SoftwareCompanyFeedback />
        <SoftwareCompanyPortfolio />
        <SoftwareCompanyCta />
        <SoftwareCompanyHowItWork />
        <SoftwareCompanyTeam />
        <SoftwareCompanyPricing />
        <SoftwareCompanyBlog />
        <CrmFooter />
      </Layout>
    </>
  );
};

export default SoftwareCompany;
