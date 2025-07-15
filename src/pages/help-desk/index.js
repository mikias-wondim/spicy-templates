import CrmFooter from "@components/crmHome/CrmFooter";
import HelpDeskBrand from "@components/helpDeskHome/HelpDeskBrand";
import HelpDeskCta from "@components/helpDeskHome/HelpDeskCta";
import HelpDeskFaq from "@components/helpDeskHome/HelpDeskFaq";
import HelpDeskFeature from "@components/helpDeskHome/HelpDeskFeature";
import HelpDeskHero from "@components/helpDeskHome/HelpDeskHero";
import HelpDeskHowWork from "@components/helpDeskHome/HelpDeskHowWork";
import HelpDeskPricing from "@components/helpDeskHome/HelpDeskPricing";
import HelpDeskSupport from "@components/helpDeskHome/HelpDeskSupport";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const HelpDesk = () => {
  return (
    <Layout classOpt="bg-light-subtle">
      <Navbar />
      <HelpDeskHero />
      <HelpDeskHowWork />
      <HelpDeskSupport />
      <HelpDeskBrand />
      <HelpDeskFeature />
      <HelpDeskPricing />
      <HelpDeskFaq />
      <HelpDeskCta />
      <CrmFooter />
    </Layout>
  );
};

export default HelpDesk;
