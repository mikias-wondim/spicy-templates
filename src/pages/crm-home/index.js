import CrmAbout from "@components/crmHome/CrmAbout";
import CrmBrand from "@components/crmHome/CrmBrand";
import CrmCrSection from "@components/crmHome/CrmCrSection";
import CrmCta from "@components/crmHome/CrmCta";
import CrmFeedbackSection from "@components/crmHome/CrmFeedbackSection";
import CrmFooter from "@components/crmHome/CrmFooter";
import CrmHtm from "@components/crmHome/CrmHtm";
import CrmIntegration from "@components/crmHome/CrmIntegration";
import CrmPriceTable from "@components/crmHome/CrmPriceTable";
import CrmService from "@components/crmHome/CrmService";
import CrmSupport from "@components/crmHome/crmSupport";
import HeroEighteen from "@components/hero-section/HeroEighteen";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const CrmHome = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <HeroEighteen />
        <CrmBrand />
        <CrmAbout />
        <CrmSupport />
        <CrmService />
        <CrmHtm />
        <CrmIntegration />
        <CrmPriceTable />
        <CrmFeedbackSection />
        <CrmCrSection />
        <CrmCta />
        <CrmFooter />
      </Layout>
    </>
  );
};

export default CrmHome;
