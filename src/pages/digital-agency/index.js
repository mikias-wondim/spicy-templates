import dynamic from "next/dynamic";
import CrmFooter from "@components/crmHome/CrmFooter";
import DigitalAgencyAbout from "@components/digitalAgencyHome/DigitalAgencyAbout";
import DigitalAgencyBlog from "@components/digitalAgencyHome/DigitalAgencyBlog";
import DigitalAgencyCta from "@components/digitalAgencyHome/DigitalAgencyCta";
import DigitalAgencyFeedback from "@components/digitalAgencyHome/DigitalAgencyFeedback";
import DigitalAgencyHero from "@components/digitalAgencyHome/DigitalAgencyHero";
import DigitalAgencyPortfolio from "@components/digitalAgencyHome/DigitalAgencyPortfolio";
import DigitalAgencyPricing from "@components/digitalAgencyHome/DigitalAgencyPricing";
import DigitalAgencyService from "@components/digitalAgencyHome/DigitalAgencyService";
import DigitalAgencyTeam from "@components/digitalAgencyHome/DigitalAgencyTeam";

import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const DigitalAgency = () => {
  return (
    <>
      <Layout>
        <Navbar navDark />
        <DigitalAgencyHero />
        <DigitalAgencyAbout />
        <DigitalAgencyService />
        <DigitalAgencyPortfolio />
        <DigitalAgencyPricing />
        <DigitalAgencyTeam />
        <DigitalAgencyFeedback />
        <DigitalAgencyCta />
        <DigitalAgencyBlog />
        <CrmFooter />
      </Layout>
    </>
  );
};

export default DigitalAgency;
