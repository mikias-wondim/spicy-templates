import DigitalMarketingAgencyDesignDetails from "@components/digitalMarketingAgency/DigitalMarketingAgencyDesignDetails";
import DigitalMarketingAgencyDigitalService from "@components/digitalMarketingAgency/DigitalMarketingAgencyDigitalService";
import DigitalMarketingAgencyFaq from "@components/digitalMarketingAgency/DigitalMarketingAgencyFaq";
import DigitalMarketingAgencyHero from "@components/digitalMarketingAgency/DigitalMarketingAgencyHero";
import DigitalMarketingAgencySocialMarketing from "@components/digitalMarketingAgency/DigitalMarketingAgencySocialMarketing";
import DigitalMarketingAgencyTestimonial from "@components/digitalMarketingAgency/DigitalMarketingAgencyTestimonial";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const DigitalMarketingAgency = () => {
  return (
    <>
      <Layout>
        <Navbar navDark />
        <DigitalMarketingAgencyHero />
        <DigitalMarketingAgencySocialMarketing />
        <DigitalMarketingAgencyDesignDetails />
        <DigitalMarketingAgencyDigitalService />
        <DigitalMarketingAgencyTestimonial />
        <DigitalMarketingAgencyFaq />
        <Footer
          style={{
            background: "url('/page-header-bg.svg')no-repeat bottom right",
          }}
        />
      </Layout>
    </>
  );
};

export default DigitalMarketingAgency;
